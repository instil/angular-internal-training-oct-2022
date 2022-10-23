import {Shape} from "./Shapes";

export function getDescription(shape: Shape): string {
    switch (shape.name) {
        case "circle":
            const area = Math.PI * shape.radius * shape.radius;
            return `Circle: Radius = ${shape.radius} | Area = ${area.toFixed(2)}`;
        case "square":
            return `Square: Side = ${shape.side} | Area = ${shape.side * shape.side}`;
        case "rectangle":
            return `Rectangle: Width = ${shape.width} | Height = ${shape.height} | Area = ${shape.width * shape.height}`;
        case "triangle":
            return `Triangle: Base Width = ${shape.baseWidth} | Height = ${shape.height} | Area = ${shape.baseWidth * shape.height}`;
    }
}
