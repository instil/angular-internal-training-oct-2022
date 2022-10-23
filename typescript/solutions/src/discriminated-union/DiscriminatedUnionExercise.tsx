import {FC, useState} from "react";
import {Shape} from "./Shapes";
import {getDescription} from "./ShapeDescription";

export const DiscriminatedUnionExercise: FC = () => {
    const [shapes, setShapes] = useState<Shape[]>(() => [
        {name: "circle", radius: 12},
        {name: "square", side: 20},
        {name: "rectangle", width: 4, height: 5},
        {name: "triangle", baseWidth: 10, height: 2},
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
