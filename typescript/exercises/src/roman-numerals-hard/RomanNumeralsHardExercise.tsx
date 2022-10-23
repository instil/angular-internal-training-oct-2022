import React, {FC, useState} from "react";
import _ from "lodash";

const numerals = new Map([
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
]);

export const RomanNumeralsHardExercise: FC = () => {
    const [input, setInput] = useState("CCCLVII");
    const [output, setOutput] = useState(0);

    function convert() {
        if (input === "Nulla") {
            setOutput(0);
            return;
        }
        setOutput(-1);
    }

    // --- Ignore ---
    return (
        <div>
            <div>
                <label className="mr-2">Roman Numeral Value:</label>
                <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            </div>
            <button className="btn btn-primary mt-2" onClick={convert}>Convert</button>

            <hr/>

            <h3>Decimal Value</h3>
            <div>{output}</div>
        </div>
    )
};
