type MyCallback = (a: string, b:number, c:boolean) => Map<string, boolean>;

type MyData = [string, number, boolean];

function sample(func: MyCallback, data: MyData): Map<string, boolean> {
    return func(...data);
}

export function showTypeAliases() {
    const data1: MyData = ["abc", 5, false];
    const data2: MyData = ["def", 50, true];

    const action:MyCallback = (p1, p2, p3) => new Map([
        ["foo", p1 == "def"],
        ["bar", p2 > 10],
        ["zed", p3]
    ]);

    console.log(sample(action, data1));
    console.log(sample(action, data2));
}
