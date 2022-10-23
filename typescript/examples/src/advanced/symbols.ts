class Person {
    private readonly emails: string[];

    constructor(private name: string, ...emails: string[]) {
        this.emails = emails;
        this[Symbol("hero name")] = "The Batman";
        this[Symbol("lair")] = "The Batcave";
    }

    [Symbol.iterator] = function* () {
        for (const email of this.emails) {
            yield email;
        }
    };
}

export function showSymbols() {
    const person = new Person(
        "Bruce Wayne",
        "bruce@waynetech.com", "lord@waynemanor.us", "b.wayne101@gmail.com");

    console.log("Iterating properties of person");
    for (const prop in person) {
        console.log('\t', prop);
    }
    console.log("Iterating contents of person");
    for (const thing of person) {
        console.log('\t', thing);
    }
    console.log("Iterating secrets of person");
    for (const sym of Object.getOwnPropertySymbols(person)) {
        console.log('\t', sym);
    }
}
