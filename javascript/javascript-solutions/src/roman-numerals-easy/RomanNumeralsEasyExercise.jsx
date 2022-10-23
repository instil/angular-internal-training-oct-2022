import React, {useState} from "react";
import _ from "lodash";
import * as R from "ramda"

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

export const RomanNumeralsEasyExercise = () => {
    const [input, setInput] = useState(356);
    const [output1, setOutput1] = useState("");
    const [output2, setOutput2] = useState("");
    const [output3, setOutput3] = useState("");

    function convert() {
        if (input === 0) {
            setOutput1("Nulla");
            return;
        }

        convert1();
        convert2();
        convert3();
    }

    function convert1() {
        let result = "";
        let value = input;
        for (let [decimalValue, stringValue] of numerals.entries()) {
            const times = Math.floor(value / decimalValue);
            const remainder = value % decimalValue;

            //NB ECMAString 2021 adds repeat function
            for (let x = 0; x < times; x++) {
                result += stringValue;
            }
            value = remainder;
        }

        setOutput1(result);
    }

    function convert2() {
        const result = [...numerals.entries()].reduce((state, [decimalValue, stringValue]) => {
            const times = Math.floor(state[1] / decimalValue);
            const remainder = state[1] % decimalValue;

            let contribution = "";
            _.times(times, () => contribution += stringValue);

            return [state[0] + contribution, remainder];
        }, ["", input]);

        setOutput2(result[0]);
    }

    function convert3() {
        const f = ([iterator, current]) => {
            const next = iterator.next();
            if (next.done) {
                return false;
            }
            const [decimalValue, stringValue] = next.value;
            const times = Math.floor(current / decimalValue);
            const contribution = R.times(() => stringValue, times).join("");
            const remainder = current % decimalValue;

            return [contribution, [iterator, remainder]];
        }

        const parts = R.unfold(f, [numerals.entries(), input]);
        setOutput3([...parts].join(""));
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
            <div>{output1}</div>
            <div>{output2}</div>
            <div>{output3}</div>
        </div>
    )
};
