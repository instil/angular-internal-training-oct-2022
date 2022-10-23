import {Customer} from "./mapped-types-model";

export function showDistinguishingMethods() {
    const customer1 = testStringify();
    console.log(customer1);

    const customer2 = testStringifyFields();
    console.log(customer2);
    customer2.makeOrder();
}

type Stringify<T> = {
    [K in keyof T]: string;
};

type StringifyFields<T> = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    [K in keyof T]: T[K] extends Function ? T[K] : string;
};

function testStringify() {
    const customer: Stringify<Customer> = {
        name: "Jason",
        age: "27",
        married: "true",
        makeOrder: "whoops"
    };
    return customer;
}

function testStringifyFields() {
    const customer: StringifyFields<Customer> = {
        name: "Jason",
        age: "27",
        married: "true",
        makeOrder() {
            console.log("Order placed by: ", this.name);
        }
    };
    return customer;
}
