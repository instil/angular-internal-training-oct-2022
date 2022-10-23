import React, {useState} from "react";

const numbers = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety']
]);

export const NumberConverterExercise = () => {
    const [input, setInput] = useState(7);
    const [output, setOutput] = useState("");

    function thousands(value: number): string {
        // e.g. 1230 -> 1
        const thousands = Math.trunc(value / 1000);
        if (thousands > 0) {
            return numbers.get(thousands) + ' thousand ';
        }
        return '';
    }

    function hundreds(value: number): string {
        // e.g. 1230 -> 230 -> 2
        const hundreds = Math.trunc((value % 1000) / 100);
        if (hundreds > 0) {
            return numbers.get(hundreds) + ' hundred ';
        }
        return '';
    }

    function and(value: number): string {
        if ((value > 100) && ((value % 100) > 0)) {
            return 'and ';
        }
        return '';
    }

    function tens(value: number): string {
        // e.g. 121 -> 21
        const remainder = Math.trunc(value % 100);
        if (remainder > 20) {
            // e.g. 21 -> 2 -> 20
            const tens = Math.trunc(remainder / 10) * 10;
            return numbers.get(tens) + units(value);
        }
        return (remainder > 0) ? numbers.get(remainder)! : '';
    }

    function units(value: number): string {
        const units = Math.trunc(value % 10);
        if (units > 0) {
            return ' ' + numbers.get(units);
        }
        return '';
    }

    function execute(): void {
        const result = [
            thousands(input),
            hundreds(input),
            and(input),
            tens(input)
        ].join('');

        setOutput(result)
    }


    // --- Ignore ---
    return (
        <div>
            <h2>Text:</h2>
            <div>
                <label className="mr-2">Number:</label>
                <input type="number" value={input} onChange={e => setInput(Number(e.target.value))}/>
            </div>
            <button className="btn btn-primary mt-2" onClick={execute}>Process</button>

            <hr/>

            <h2>Output</h2>
            <pre>{output}</pre>
        </div>
    )
};
