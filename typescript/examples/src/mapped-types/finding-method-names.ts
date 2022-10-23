class Operations {
    increment(input: number): number {
        return input + 1;
    }
    decrement(input: number): number {
        return input - 1;
    }
    add(input1: number, input2: number): number {
        return input1 + input2;
    }
    subtract(input1: number, input2: number): number {
        return input1 - input2;
    }
    concat(input1: string, input2: string): string {
        return input1 + input2;
    }
}

type UnaryMethodNames<T> = {
    [K in keyof T]: T[K] extends (value: any) => any ? K : never
}[keyof T];

function demo(name: UnaryMethodNames<Operations>, value: number) {
    const op = new Operations();
    console.log(op[name](value));
}

export function showFindingMethodNames() {
    demo("increment", 10);
    demo("decrement", 10);

    //demo("add", 10);

    let test: UnaryMethodNames<Operations>;
    test = "decrement";
    test = "increment";
    //test = "subtract";
}
