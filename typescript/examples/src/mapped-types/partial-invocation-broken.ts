import {AllParams, FirstParam, OtherParams} from "./working-with-params";

type AnyFunc = (...args: any[]) => any;

type PartiallyInvoke<T extends AnyFunc> =
    T extends ((...args: infer A) => infer R)
    ? ((first: FirstParam<A>) => (x: OtherParams<AllParams<T>>) => R)
    : never;

function partial<T extends AnyFunc>(func: T): PartiallyInvoke<T> {
    return ((first) => (...others) => func(first, ...others)) as PartiallyInvoke<T>;
}

function test1(x: string, y: number, z: boolean): string {
    console.log("Demo called with ", x, y, " and ", z);
    return "Foobar";
}

function test2(x: number, y: boolean, z: string): number {
    console.log("Test 2 called with ", x, y, " and ", z);
    return 123;
}

export function showPartialApplicationBroken() {
    const f1 = partial(test1);
    const f2 = partial(test2);

    const result1 = f1("abc")([123,true]);
    const result2 = f2(123)([false,"abc"]);

    console.log(result1);
    console.log(result2);
}

