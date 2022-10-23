type StringNumber = string | number;

type StringNumberToggle<T extends string | number> = T extends string ? number : string;

function toggleNumber<T extends StringNumber>(value: T): StringNumberToggle<T> {
    if (typeof value === "string") {
        // Unfortunately as have to make a type assertion to show we will get the right result
        return Number(value) as StringNumberToggle<T>;
    }
    return value.toString() as StringNumberToggle<T>;
}


export function showConditionalTypes() {
    // This will be statically typed as a string
    const numberAsString = toggleNumber(12);
    console.log(numberAsString);

    // This will be statically typed as a number
    const stringAsNumber = toggleNumber("12");
    console.log(stringAsNumber);
    complexConditionalTypes();
}


class Person {
    personMethod() {
    }
}

class Employee extends Person {
    employeeMethod() {
    }
}

class Manager extends Employee {
    managerMethod() {
    }
}

class Director extends Manager {
    directorMethod() {
    }
}

function promote<T extends Person>(object: T):
    T extends Director
        ? never
        : (T extends Manager
        ? Director
        : (T extends Employee
            ? Manager
            : Employee)) {
    return {} as any;
}

function complexConditionalTypes() {
    // Realise that conditional types don't change anything at runtime
    // This is all happening at compile time to give type safety.

    // What are the types of the following variables?
    const result1 = promote(new Person());
    const result2 = promote(new Employee());
    const result3 = promote(new Manager());
    const result4 = promote(new Director());
}
