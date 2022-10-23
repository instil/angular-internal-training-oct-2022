import React, {useState} from "react";

export const DiamondsExercise = () => {
    const [height, setHeight] = useState(7);
    const [output1, setOutput1] = useState("");
    const [output2, setOutput2] = useState("");

    function execute() {
        execute1();
        execute2();
    }

    function execute1() {
        // TODO: Solutions goes here
        //       Process 'input' number and write result to 'output' string
        //       Output a diamond of height 'height' as a text block.
        //       The height will always be odd
        let result = '';
        const midpoint = (height + 1) / 2;
        let spaces = midpoint - 1;
        let stars = 1;

        const outputRow = () => result += `${' '.repeat(spaces)}${'*'.repeat(stars)}\n`;

        for (let ii = 0; ii < midpoint; ii++) {
            outputRow();
            spaces--;
            stars += 2;
        }

        spaces++;
        stars -= 2;

        for (let ii = 0; ii < midpoint - 1; ii++) {
            spaces++;
            stars -= 2;
            outputRow();
        }

        setOutput1(result);
    }

    function execute2() {
        const getRow = (spaces, stars) => `${' '.repeat(spaces)}${'*'.repeat(stars)}\n`;

        function outputMirroredRows(spaces, stars) {
            const row = getRow(spaces, stars);
            result = row + result + row;
        }

        const midpoint = (height + 1) / 2;
        let stars = height;
        let result = getRow(0, stars);

        for (let spaces = 1; spaces < midpoint; spaces++) {
            stars -= 2;
            outputMirroredRows(spaces, stars);
        }
        setOutput2(result);
    }

    // --- Ignore ---
    return (
        <div>
            <h2>Text:</h2>
            <div>
                <label className="mr-2">Height:</label>
                <input type="number" value={height} onChange={e => setHeight(Number(e.target.value))}/>
            </div>
            <button className="btn btn-primary mt-2" onClick={execute}>Process</button>

            <hr/>

            <h2>Output</h2>
            <pre>{output1}</pre>
            <hr/>
            <pre>{output2}</pre>
        </div>
    )
};
