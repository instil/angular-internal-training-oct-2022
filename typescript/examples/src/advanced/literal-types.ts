type Beatles = "John" | "Paul" | "George" | "Ringo"
type Simpsons = "Homer" | "Marge" | "Bart" | "Lisa" | "Maggie";
type Flintstones = "Fred" | "Wilma" | "Pebbles";

type StoryPoints = 1 | 2 | 3 | 5 | 8 | 13 | 21 | 'Infinity';
type Evens = 2 | 4 | 6 | 8 | 10;
type Odds = 1 | 3 | 5 | 7 | 9;

// This function takes a Simpson or an Even
function demo1(input: Simpsons | Evens) {
    console.log(input);
}

// This function takes a Flintstone or an Odd
function demo2(input: Flintstones | Odds) {
    console.log(input);
}

export function showLiteralTypes() {
    const estimate: StoryPoints = 8;
    const singer: Beatles = "John";

    // These would not compile
    //const otherEstimate: StoryPoints = 9;
    //const otherSinger: Beatles = "Dave";

    console.log(estimate);
    console.log(singer);

    demo1("Homer");
    demo1(6);

    // Cannot call demo1 with a Flintstone
    //demo1("Betty");

    // Cannot call demo2 with an Odd
    //demo1(7);

    demo2("Wilma");
    demo2(7);

    // Cannot call demo2 with a Simpson
    //demo2("Homer");

    // Cannot call demo2 with an Even
    //demo2(6);
}

