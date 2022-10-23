export function showPrimitiveDataTypes() {
    const var1: boolean = false;
    const var2: number = 1234.567;
    const var3: string = 'abcdef';

    console.log(var1);

    // Can only call Number methods on var2
    console.log(var2.toFixed(2));

    // Can only call String methods on var3
    console.log(var3.toUpperCase());
}
