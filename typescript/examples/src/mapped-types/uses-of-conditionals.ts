class InstilMath {
    add(lhs: number, rhs: number): number {
        return lhs + rhs;
    }

    subtract(lhs: number, rhs: number): number {
        return lhs - rhs;
    }

    negate(value: number): number {
        return -value;
    }

    parse(value: string): number {
        return Number(value);
    }

    toString(value: number): string {
        return value.toString();
    }
}

type UnaryMethod<T, R> = (value: T) => R;

type UnaryMethodNames<T> = {
    [K in keyof T]: T[K] extends (value: any) => any ? K : never
}[keyof T];

type UnaryMethodReturnTypes<T> = {
    [K in keyof T]: T[K] extends (value: any) => any ? ReturnType<T[K]> : never
}[keyof T]

type UnaryMethodInput<T, M extends UnaryMethodNames<T>> = T[M] extends (value: infer U) => any ? U : never;

type UnaryMethodInputs<T, M extends UnaryMethodNames<T>> = {
    [K in keyof T]: T[K] extends (value: infer U) => any ? U : never
}[keyof T];


export function showMappedTypesUtilities() {

    // UnaryMethodNames<InstilMath> will be '"parse" | "negate" | "toString"'
    const name1: UnaryMethodNames<InstilMath> = "parse";
    const name2: UnaryMethodNames<InstilMath> = "negate";
    // const name3: UnaryMethodNames<InstilMath> = "add"; // Will not compile


    // UnaryMethodReturnTypes<InstilMath> will be 'number | string'
    const result1: UnaryMethodReturnTypes<InstilMath> = 12;
    const result2: UnaryMethodReturnTypes<InstilMath> = '12';
    // const result3: UnaryMethodReturnTypes<InstilMath> = new Date(); // Will not compile

    // Type 'string'
    const input1: UnaryMethodInput<InstilMath, "parse"> = "12";

    // Type 'number'
    const input2: UnaryMethodInput<InstilMath, "negate"> = 13;

    // const input3: UnaryMethodInput<InstilMath, "toString"> = "13"; // Will not compile
}

function callUnaryMethod<
    K extends UnaryMethodNames<InstilMath>,
    I extends UnaryMethodInput<InstilMath, K>
    >(method: K, value: I): ReturnType<InstilMath[K]> {
    const math = new InstilMath();
    return (math[method] as UnaryMethod<I, ReturnType<InstilMath[K]>>)(value);
}
