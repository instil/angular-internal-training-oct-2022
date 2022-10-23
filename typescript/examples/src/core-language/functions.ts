function demo1(input: string): number {
    return Number(input) + 1;
}

function demo2(input1: (_: string) => number, input2: string): number {
    return input1(input2);
}

function demo3(input: string): (_: string) => boolean {
    let regex = new RegExp(input);
    return text => regex.test(text);
}

function demo4(input: any): void {
    console.log("Void function called with " + input);
}

function demo5(no1: number, no2?: number): number {
    return no2 ? no1 * no2 : no1 * 10;
}

function demo6(no1: number, no2 = 10): number {
    return no1 * no2;
}

export function showFunctionDeclarations() {
    console.log(demo1("123"));
    console.log(demo2(demo1, "456"));

    let func1 = demo3("[A-Z]{6}");
    let func2 = demo3("[a-z]{6}");

    console.log(func1("abcDEFGHIjkl"));
    console.log(func2("abcDEFGHIjkl"));

    demo4(1234);

    console.log(demo5(12, 34));
    console.log(demo5(12));

    console.log(demo6(12, 34));
    console.log(demo6(12));
}
