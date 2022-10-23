import React, {FC, useState} from "react";
import _ from "lodash";

const numerals = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
]);

export const RomanNumeralsEasyExercise: FC = () => {
    const [input, setInput] = useState(356);
    const [output, setOutput] = useState("");

    function convert() {
        if(input === 0) {
            setOutput("Nulla");
            return;
        }
        setOutput("???");
    }

    // --- Ignore ---
    return (
        <div>
            <div>
                <label className="mr-2">Decimal Value:</label>
                <input type="number" value={input} onChange={e => setInput(Number(e.target.value))}/>
            </div>
            <button className="btn btn-primary mt-2" onClick={convert}>Convert</button>

            <hr/>

            <h3>Roman Numeral Value</h3>
            <div>{output}</div>
        </div>
    )
};
