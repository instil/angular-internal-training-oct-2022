import {Inc} from "./recursive-types-numbers";

export function showRecursiveTypesWithLists() {
    type SampleList = [boolean, number, string];

    const data1: Head<SampleList> = true;
    const data2: Rest<SampleList> = [12, "abc"];
    const data3: LengthByRecursion<SampleList> = 3;
    const data4: Reverse<SampleList> = ["def", 123, false];

    console.log(data1);
    console.log(data2);
    console.log(data3);
    console.log(data4);
}

export type Head<T extends any[]> =
T extends [any, ...any[]] ? T[0] : never;

export type Rest<T extends any[]> =
    ((...t: T) => any) extends ((_: any, ...tail: infer TT) => any)
    ? TT : []

export type EmptyList<T extends any[]> =
    T extends [] ? true : false

export type LengthByProperty<T extends any[]> = T['length']

export type LengthByRecursion<T extends any[], R extends number = 0> = {
    again: LengthByRecursion<Rest<T>, Inc<R>>
    return: R
}[ T extends [] ? "return" : "again" ]

export type Prepend<E, T extends any[]> =
    // assign [E, ...T] to U
    ((head: E, ...args: T) => any) extends ((...args: infer U) => any)
    ? U
    : never //never reached

export type Reverse<T extends any[], R extends any[] = [], I extends any[] = []> = {
    again: Reverse<T, Prepend<T[I['length']], R>, Prepend<any, I>>
    return: R
}[ I['length'] extends T['length'] ? "return" : "again" ]
