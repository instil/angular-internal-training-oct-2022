type Employee = {
    name: string,
    dept: string,
    age: number,
    salary: number,
    benefits: number,
    yearsService: number
};

function printSummaryDetails({yearsService, age}: Employee) {
    const result = `Employee aged ${age} with ${yearsService} years of service`;
    console.log(result);
}

function printArrayContents([head, ...tail]: number[]) {
    console.log(head);
    if (tail.length > 0) {
        printArrayContents(tail);
    } else {
        console.log("-----");
    }
}

function printElementsWithIds() {
    //Find elements in the document with an ID, which are
    // the odd numbered children of their parents
    const nodes = document.querySelectorAll("*:nth-child(odd)[id]");
    Array.from(nodes)
        .map(({id, tagName}) => `Node of type ${tagName} with id ${id}`)
        .forEach(str => console.log(str));
}

export function showDestructuringInParameters() {
    const employee = {
        name: "Jane",
        dept: "IT",
        age: 27,
        salary: 40000.0,
        benefits: 250,
        yearsService: 3
    };

    const array = [10, 20, 30, 40, 50, 60, 70, 80];

    printSummaryDetails(employee);
    printArrayContents(array);
    printElementsWithIds();
}
