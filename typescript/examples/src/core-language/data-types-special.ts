export function showSpecialTypes() {
    const var1: any = 123;
    const var2: unknown = "qwerty";

    try {
        console.log(var1.toUpperCase());
    } catch (ex) {
        console.log("Type error with var1");
    }

    // This will not compile
    //console.log(var2.toUpperCase());

    // The deprecated way to do a type assertion
    const var3 = <string>var2;
    // The approved way to do a type assertion
    const var4 = var2 as string;

    console.log(var3.toUpperCase());
    console.log(var4.toUpperCase());
}
