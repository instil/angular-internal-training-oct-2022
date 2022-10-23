import {FirstParam} from "./working-with-params";

type AnyFunc = (...args: any[]) => any;

type Remainder<T extends AnyFunc> =
    T extends ((...args: infer A) => infer R)
        ? A extends [infer P1, infer P2]
            ? (x:P2) => R
            : A extends [infer P1, infer P2, infer P3]
                ? ((x:P2, y:P3) => R)
                    : A extends [infer P1, infer P2, infer P3, infer P4]
                        ? ((x:P2, y:P3, z:P4) => R)
                        : never
        : never;

type PartiallyInvoke<T extends AnyFunc> =
    T extends ((...args: infer A) => infer R)
    ? ((first: FirstParam<A>) => Remainder<T>)
    : never;

export function partial<T extends AnyFunc>(func: T): PartiallyInvoke<T> {
    return ((first) => (...others) => func(first, ...others)) as PartiallyInvoke<T>;
}

function test1(x: string, y: number, z: boolean): string {
    console.log("Test 1 called with ", x, y, " and ", z);
    return "Foobar";
}

function test2(x: number, y: boolean, z: string): number {
    console.log("Test 2 called with ", x, y, " and ", z);
    return 123;
}

export function showPartialApplicationImproved() {
    const f1 = partial(test1);
    const f2 = partial(test2);

    const result1 = f1("abc")(123, true);
    const result2 = f2(123)(false, "abc");

    console.log(result1);
    console.log(result2);
}
