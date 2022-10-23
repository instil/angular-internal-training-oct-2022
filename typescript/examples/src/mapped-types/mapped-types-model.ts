
export class Person {
    constructor(public name: string,
                public age: number,
                public married: boolean) {}
}

export class Customer extends Person {
    constructor(name: string, age: number, married: boolean) {
        super(name, age, married);
    }
    makeOrder() {}
}
