import React, {FC} from "react";
import {Flatten, Person} from "./Person";

function capitalise(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Assumes the property types are only string, number, boolean or nested object
function flattenObject<T>(obj: T, prefix = "", result: Flatten<T> = {} as Flatten<T>): Flatten<T> {
    for (const [key, value] of Object.entries(obj)) {
        const fullKey = prefix === "" ? key : prefix + capitalise(key);
        if (typeof value !== "object") {
            result[fullKey as keyof Flatten<T>] = value;
        } else {
            flattenObject(value, fullKey, result);
        }
    }
    return result;
}

function json(obj: unknown): string {
    return JSON.stringify(obj, null, 2);
}

export const MappedTypesFlattenExercise: FC = () => {
    const original: Person = {
        name: "Jane Doe",
        age: 21,
        address: {
            houseNumber: 123,
            street: "Main Street",
            city: {
                name: "Anytown",
                countryCode: "AN"
            }
        }
    };
    const flattened = flattenObject(original);

    return (
        <div>
            <h2>Object Before</h2>
            <pre>{json(original)}</pre>

            <hr/>

            <h2>Object Flattened</h2>
            <pre>{json(flattened)}</pre>
        </div>
    );
}
