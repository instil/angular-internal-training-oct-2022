export function showTuples() {
    const var1: [number, string, boolean] = [12, "abc", true];
    const var2: [boolean, number, string] = [false, 34, "def"];

    // The second item in var1 must be a string
    var1[1] = "xyz";

    // The second item in var2 must be a number
    var2[1] = 99;

    console.log(var1);
    console.log(var2);
}
