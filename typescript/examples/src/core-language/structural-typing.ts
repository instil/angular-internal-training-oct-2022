type Pair = {
    first: string,
    second: number
};

interface Tuple2 {
    first: string;
    second: number;
}

class Dyad {
    constructor(public first: string, public second: number) {}
}

function test1(input: Pair) {
    console.log(`test1 called with ${input.first} and ${input.second}`);
}

function test2(input: Tuple2) {
    console.log(`test2 called with ${input.first} and ${input.second}`);
}

function test3(input: Dyad) {
    console.log(`test3 called with ${input.first} and ${input.second}`);
}

export function structuralTyping() {
    const sample1 = {
        first: "wibble",
        second: 1234
    };
    const sample2 = new Dyad("wobble", 5678);

    test1(sample1);
    test1(sample2);

    test2(sample1);
    test2(sample2);

    test3(sample1);
    test3(sample2);
}
