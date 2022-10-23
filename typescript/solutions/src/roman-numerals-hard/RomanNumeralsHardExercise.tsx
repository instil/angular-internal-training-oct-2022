import React, {FC, useState} from "react";

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
    const [output1, setOutput1] = useState(0);
    const [output2, setOutput2] = useState(0);
    const [output3, setOutput3] = useState(0);

    function convert(): void {
        if (input === "Nulla") {
            setOutput1(0);
            return;
        }

        convert1();
        convert2();
        convert3();
    }

    function convert1(): void {
        let result = 0;
        let index = 0;
        const characters = input.split("");
        while (index < characters.length) {
            const nextTwo = characters[index] + characters[index + 1];
            if (numerals.has(nextTwo)) {
                result += numerals.get(nextTwo)!;
                index += 2;
            } else {
                var nextOne = characters[index];
                result += numerals.get(nextOne)!;
                index += 1;
            }
        }
        setOutput1(result);
    }

    function convert2() {
        function* unfold(input: string): Generator<string> {
            const characters = input.split("");
            let index = 0;
            while (index < characters.length) {
                const nextTwo = characters[index] + characters[index + 1];
                if (numerals.has(nextTwo)) {
                    index += 2;
                    yield nextTwo;
                } else {
                    const nextOne = characters[index];
                    index += 1;
                    yield nextOne;
                }
            }
        }

        const result = [...unfold(input)]
            .map(key => numerals.get(key)!)
            .reduce((a, b) => a + b);

        setOutput2(result);
    }

    function convert3() {
        let remainder = input;
        let total = 0;
        for (const [roman, value] of numerals) {
            while (remainder.startsWith(roman)) {
                total += value;
                remainder = remainder.slice(roman.length);
            }
        }
        setOutput3(total);
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
            <div>{output1}</div>
            <div>{output2}</div>
            <div>{output3}</div>
        </div>
    )
};
