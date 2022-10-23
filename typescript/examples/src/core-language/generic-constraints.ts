class Person {
    constructor(public name: string) {
    }
}

class Employee extends Person {
    constructor(name: string, protected dept: string) {
        super(name);
    }
}

class Contractor extends Person {
    constructor(name: string, private rate = 1000.0) {
        super(name);
    }
}

class Manager extends Employee {
    constructor(name: string, dept: string, private budget: number) {
        super(name, dept);
    }
}

function demo1<T extends Employee>(input: Array<T>) {
    console.log("demo1 succeeds");
}

function demo2<T extends Person>(input1: Array<T>,
                                 input2: { new(x: string): T },
                                 input3: string) {
    input1.push(new input2(input3));
    console.log("demo2 succeeds");
}

function demo3<T extends Person>(input1: Array<T>,
                                 input2: new(x: string, y: number) => T,
                                 input3: string,
                                 input4: number) {
    input1.push(new input2(input3, input4));
    console.log("demo3 succeeds");
}

export function showGenericConstraints() {
    let list1 = new Array<Person>();
    let list2 = new Array<Employee>();
    let list3 = new Array<Manager>();

    // demo1(list1);
    demo1(list2);
    demo1(list3);

    demo2(list1, Person, "Pete");
    //demo2(list1,Employee,"Pete");
    demo2(list1, Contractor, "Pete");

    //demo3(list1,Employee,"Pete",2000);
    demo3(list1, Contractor, "Pete", 2000);
    //demo3(list1,Manager,"Pete",2000);
}
