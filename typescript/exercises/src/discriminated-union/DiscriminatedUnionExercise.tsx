import {FC, useState} from "react";
import {Circle, Rectangle, Shape, Square} from "./Shapes";
import {getDescription} from "./ShapeDescription";

export const DiscriminatedUnionExercise: FC = () => {
    // Step 2 - Update object initialisation to simple objects
    const [shapes, setShapes] = useState<Shape[]>(() => [
        new Circle(12),
        new Square(20),
        new Rectangle(4, 5)
    ]);

    const serialiseDeserialise = () => {
        const asJson = JSON.stringify(shapes);
        const asShapes = JSON.parse(asJson) as Shape[];
        setShapes(asShapes);
    };

    return (
        <div>
            <h1>Shape Descriptions</h1>
            <button onClick={serialiseDeserialise} className="btn btn-primary my-2">
                Serialise then Deserialise
            </button>
            <ul>
                {shapes.map((shape, index) =>
                    <li key={index}>{getDescription(shape)}</li>
                )}
            </ul>
        </div>
    )
}
