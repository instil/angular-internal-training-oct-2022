export function showIteration() {
    const array = ["abc", 123, "def", 456];

    console.log("--- Original array ---");
    console.log(array);

    console.log("--- While loop ---");
    let index = 0; // Initialisation
    while (index < array.length) { // Condition
        console.log(array[index]);
        index++; // Mutation
    }

    console.log("--- For loop ---");
    //   Initialisation     Condition         Mutation
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }

    console.log("--- For..in loop ---");
    for (const index in array) {
        console.log(array[index]);
    }

    console.log("--- For..of loop ---");
    for (const value of array) {
        console.log(value);
    }
}
