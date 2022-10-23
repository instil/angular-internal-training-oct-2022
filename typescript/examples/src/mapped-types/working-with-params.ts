
export type AllParams<T extends (...args: any[]) => any> =
    T extends ((...args: infer A) => any) ? A : never;

export type FirstParam<T extends any[]> =
    T extends [any, ...any[]] ? T[0] : never;

export type OtherParams<T extends any[]> =
    ((...things: T) => any) extends ((first: any, ...others: infer R) => any) ? R : [];


function demo(p1: string, p2: number, p3: boolean) {
    console.log("Demo called with", p1, p2, "and", p3);
}

export function showWorkingWithParameters() {
    const var1: AllParams<typeof demo> = ["abc", 123, false];
    const var2: FirstParam<AllParams<typeof demo>> = "def";
    const var3: OtherParams<AllParams<typeof demo>> = [456, true];

    demo(...var1);
    demo(var2, ...var3);
}
