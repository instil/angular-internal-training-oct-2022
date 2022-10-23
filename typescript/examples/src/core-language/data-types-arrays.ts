function sortNumberArray(num1: number, num2: number) {
    return num1 - num2;
}

function sortStringArray(str1: string, str2: string) {
    return str1.length - str2.length;
}

export function showArrays() {
    const var1: number[] = [78, 56, 34, 12];
    const var2: Array<string> = ["ab", "cde", "fghi", "jk", "lmnop", "qrs"];

    // Can only push numbers onto var1
    var1.push(90);

    // Can only push strings onto var2
    var2.push("mno");

    console.log(var1);
    console.log(var2);

    // When sorting the functions must have the correct signature
    const var3 = var1.sort(sortNumberArray);
    const var4 = var2.sort(sortStringArray);

    console.log(var3);
    console.log(var4);
}
