import {cow, Mammal, Oviparous} from "./animals";

type Point = {
    x: number,
    y: number
};

type RetVal = string | Point | Element;

type Animal = Mammal | Oviparous;

function demo1() {
    let creature1: Animal = cow as Animal;
    console.log(creature1.name);

    // creature1.produceMilk();  // Invalid
    // creature1.layEggs();      // Invalid
}

function demo2(input: number): RetVal {
    let output: RetVal = {x: 20, y: 40};
    if (input < 50) {
        output = "qwerty";
    } else if (input < 100) {
        output = document.createElement("div");
    }
    return output;
}

export function showUnionTypes() {
    demo1();

    console.log(demo2(40));
    console.log(demo2(80));
    console.log(demo2(120));

    let result = demo2(90);
    if (result instanceof Element) {
        //no cast required
        result.appendChild(document.createTextNode("Hello"));
        console.log(result);
    }
}
