// TypeScript supports automatic narrowing
import {cow, Cow, Mammal, Oviparous} from "./animals";

type Animal = Mammal | Oviparous;

function showNullGuard() {
    const creature1: Mammal | null = getCowMaybe();

    // creature1.produceMilk(); // Invalid as type may be null

    console.log("Type Guard using null check");
    if (creature1 !== null) {
        creature1.produceMilk();
    }

    // Special null operators
    creature1?.produceMilk();
    creature1!.produceMilk();
    (creature1 ?? new Cow()).produceMilk();
}

function showInGuard() {
    const creature1: Mammal | Oviparous = getAnimal();

    console.log("Type Guard using 'in' keyword");
    if ('layEggs' in creature1) {
        creature1.layEggs(); // Narrowed to Oviparous
    } else {
        creature1.produceMilk(); // Must be Mammal
    }
}

function showInstanceofGuard() {
    const creature1: Mammal | Oviparous = getAnimal();

    // creature1.produceMilk(); // Invalid as it may be Oviparous
    // creature2.layEggs(); // Invalid as it may be a Mammal

    console.log("Type Guard using instanceof");
    if (creature1 instanceof Cow) {
        creature1.produceMilk();
    }
}

function showCustomGuard() {
    function isMammal(creature: Animal): creature is Mammal {
        return (<Mammal>creature).produceMilk !== undefined;
    }

    const creature1: Mammal | Oviparous = getAnimal();

    console.log("Type Guard using custom guard");
    if (isMammal(creature1)) {
        creature1.produceMilk(); // Narrowed to mammal
    } else {
        creature1.layEggs(); // Must be EggLayer if not mammal
    }
}

function showAssertionFunction() {
    function assertIsMammal(creature: Animal): asserts creature is Mammal {
        if ("produceMilk" in creature) return;

        throw new Error("Expected a Mammal");
    }

    const creature1: Mammal | Oviparous = getAnimal();

    // creature1.produceMilk(); // Invalid as still union
    assertIsMammal(creature1);
    creature1.produceMilk(); // After the assertion function the type is narrowed
}


function showAliasedConditions() {
    const creature1: Mammal | Oviparous | string = getAnimalOrString();

    // Since TypeScript 4.4 (and only then) we can break
    // guard conditions into consts
    const isString = typeof creature1 === "string";
    const isOviparous = !isString && 'layEggs' in creature1;

    if (isOviparous) {
        creature1.layEggs(); // Narrowed to Oviparous
    } else if (!isString) {
        creature1.produceMilk(); // Must be Mammal
    }
}

export function showGuards() {
    showNullGuard();
    showInGuard();
    showInstanceofGuard();
    showCustomGuard();
    showAssertionFunction();
    showAliasedConditions();
}

function getAnimalOrString(): Mammal | Oviparous | string {
    return getAnimal();
}

function getAnimal(): Mammal | Oviparous {
    return cow;
}

function getCowMaybe(): Mammal | null {
    return cow;
}
