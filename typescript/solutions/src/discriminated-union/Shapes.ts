export interface Circle {
    readonly name: "circle";
    readonly radius: number;
}

export interface Square {
    readonly name: "square";
    readonly side: number;
}

export interface Rectangle {
    readonly name: "rectangle";
    readonly width: number;
    readonly height: number;
}

export interface Triangle {
    readonly name: "triangle";
    readonly baseWidth: number;
    readonly height: number;
}

export type Shape =
    | Circle
    | Square
    | Rectangle
    | Triangle;
