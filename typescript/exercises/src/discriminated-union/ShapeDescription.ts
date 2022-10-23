import {Circle, Rectangle, Shape, Square} from "./Shapes";

// TODO: Step 3 - Convert this function to process the type as a discriminated union
// TODO: Step 4 - Once the program is working, add a 4th shape, triangle (base width & height)
//                Observe that you get an error until you supprt that case in this function
export function getDescription(shape: Shape): string {
    let result = "";
    if (shape instanceof Circle) {
        const area = Math.PI * shape.radius * shape.radius;
        result = `Circle: Radius = ${shape.radius} | Area = ${area.toFixed(2)}`;
    } else if (shape instanceof Square) {
        result = `Square: Side = ${shape.side} | Area = ${shape.side * shape.side}`;
    } else if (shape instanceof Rectangle) {
        result = `Rectangle: Width = ${shape.width} | Height = ${shape.height} | Area = ${shape.width * shape.height}`;
    } else {
        result = "Unknown shape!"
    }
    return result;
}
