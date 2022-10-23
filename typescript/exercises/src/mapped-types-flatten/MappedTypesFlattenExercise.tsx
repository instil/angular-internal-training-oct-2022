import React, {FC} from "react";
import {Person} from "./Person";

// TODO: Create a function that will transform an input type into a flatten version
//       Start off with any and then implement the types generically.
//       Assume the shape will only be strings, numbers or nested objects
//       For person,
//       {
//           name: string;
//           age: number;
//           address: {
//               houseNumber: number;
//               street: string;
//               city: {
//                   name: string;
//                   countryCode: string;
//               };
//           }
//       }
//
//       the result should be
//       {
//         name: string;
//         age: number;
//         addressHouseNumber: number;
//         addressStreet: string;
//         addressCityName: string;
//         addressCityCountryCode: string;
//       }

// TODO: Step 1 - Implement the flatten logic - use any types for now
//                After, do to the Person file and implement the types

// TODO: Step 7 - Replace the any's with a generic signature that uses the new type
// Assumes the property types are only string, number, boolean or nested object
function flattenObject<T>(obj: any): any {
    return obj;
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
