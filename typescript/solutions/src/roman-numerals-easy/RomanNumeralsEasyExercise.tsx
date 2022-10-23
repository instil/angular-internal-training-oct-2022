import React, {useState} from "react";

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
    const [output, setOutput] = useState("");

    function convert() {
        if (input === 0) {
            setOutput("Nulla");
        } else {
            setOutput(`${proceduralSolution()} ${functionalSolution()}`);
        }
    }

    function proceduralSolution(): string {
        let result = "";
        let remainder = input;
        for (const [decimalValue, stringValue] of numerals.entries()) {
            const times = Math.floor(remainder / decimalValue);
            remainder %= decimalValue;
            result += stringValue.repeat(times);
        }
        return result;
    }

    function functionalSolution(): string {
        const startState: [number, string] = [input, ""]
        return [...numerals.entries()].reduce(reducer, startState)[1]

        function reducer(
            [remainingValue, currentResult]: [number, string],  //state
            [numeralAsInt, numeralAsText]: [number, string]     //next row from the table
        ): [number, string] {

            const times = remainingValue / numeralAsInt;
            const remainder = remainingValue % numeralAsInt;
            const newResult = currentResult + numeralAsText.repeat(times);

            return [remainder, newResult];
        }
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
