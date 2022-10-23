export function showRecursiveTypesWithNumbers() {
    const data1: Inc<8> = 9;
    const data2:Dec<5> = 4;
    const data3: Dec<typeof data1> = 8;
    const data4: Add<3, 5> = 8;
    const data5: Subtract<9, 2> = 7;
    const data6: Add<3, Subtract<Inc<5>, Dec<1>>> = 9;

    console.log(data1, data2, data3, data4, data5, data6);
}

type IncTable = { 0: 1; 1: 2; 2: 3; 3: 4; 4: 5; 5: 6; 6: 7; 7: 8; 8: 9; 9: 10 };
export type Inc<T extends number> = T extends keyof IncTable ? IncTable[T] : never;

type DecTable = { 10: 9; 9: 8; 8: 7; 7: 6; 6: 5; 5: 4; 4: 3; 3: 2; 2: 1; 1: 0 };
export type Dec<T extends number> = T extends keyof DecTable ? DecTable[T] : never;

export type Add<A extends number, B extends number> = {
    again: Add<Inc<A>, Dec<B>>
    return: A
}[B extends 0 ? "return" : "again"]

export type Subtract<A extends number, B extends number> = {
    again: Subtract<Dec<A>, Dec<B>>
    return: A
}[B extends 0 ? "return" : "again"]
