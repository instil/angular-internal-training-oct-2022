import {Customer, Person} from "../mapped-types/mapped-types-model";

export function showBasicMappedTypes() {
    const person = new Person("Jane", 34, false);
    const constantPerson: InstilReadOnly<Person> = person;
    const mutablePerson: InstilMutable<Person> = constantPerson;

    person.name = "Dave";
    //constantPerson.name = "Mary";
    mutablePerson.name = "Mary";

    console.log(person, constantPerson, mutablePerson);

    let partialCustomer: InstilPartial<Customer>;
    let fullCustomer: InstilRequired<Customer>;

    partialCustomer = person;
    console.log(partialCustomer);

    partialCustomer = {name: "Robin"};

    // fullCustomer = person;
    fullCustomer = {
        ...person,
        makeOrder() {
        }
    };

    console.log(partialCustomer, fullCustomer);
}

type InstilReadOnly<T> = {
    readonly [K in keyof T]: T[K];
};

type InstilMutable<T> = {
    -readonly [K in keyof T]: T[K];
};

type InstilPartial<T> = {
    [K in keyof T]?: T[K];
};

type InstilRequired<T> = {
    [K in keyof T]-?: T[K];
};

