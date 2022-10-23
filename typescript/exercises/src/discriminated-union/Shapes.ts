
// TODO: Step 1 - Convert to a discriminated union of interfaces

export abstract class Shape {
    constructor(public readonly name: string) {
    }
}

export class Circle extends Shape {
    constructor(public readonly radius: number) {
        super("circle");
    }
}

export class Square extends Shape {
    constructor(public readonly side: number) {
        super("square");
    }
}

export class Rectangle extends Shape {
    constructor(public readonly width: number,
                public readonly height: number) {
        super("rectangle");
    }
}
