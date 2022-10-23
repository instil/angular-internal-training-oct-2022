function concatenate(lhs: string, rhs: string): string;
function concatenate(lhs: number, rhs: number): number;
function concatenate(lhs: any, rhs: any): any {
    return lhs + rhs;
}

// The type of the function is an intersection of both overloads
type ConcatentateFunctionType = {
    (lhs: string, rhs: string): string;
    (lhs: number, rhs: number): number;
}

// You could use this to create an arrow implementation of the overloaded function
const concatenateArrow: ConcatentateFunctionType = (lhs: any, rhs: any): any => lhs + rhs;

export function showFunctionOverloading() {
    let numberResult = concatenate(12, 23);
    let stringResult = concatenate("abc", "def");

    // let illegal = concatenate(12, "wed");
    console.log(numberResult);
    console.log(stringResult);
}
