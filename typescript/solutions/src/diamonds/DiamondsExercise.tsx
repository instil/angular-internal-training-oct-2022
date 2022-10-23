import React, {FC, useState} from "react";

export const DiamondsExercise: FC = () => {
    const [height, setHeight] = useState(7);
    const [output, setOutput] = useState("");

    function execute(): void {
        if (height % 2 === 0) {
            setOutput('The input must be an odd number');
            return;
        }

        const getRow = (spaces: number, stars: number) => `${' '.repeat(spaces)}${'*'.repeat(stars)}\n`;

        const midpoint = (height + 1) / 2;
        let stars = height;
        let result = getRow(0, stars);
        for (let spaces = 1; spaces < midpoint; spaces++) {
            stars -= 2;
            const row = getRow(spaces, stars);
            result = row + result + row;
        }
        setOutput(result);
    }

    // --- Ignore ---
    return (
        <div>
            <h2 data-testid="title">Diamonds</h2>
            <div>
                <label className="mr-2">Height:</label>
                <input type="number" value={height} onChange={e => setHeight(Number(e.target.value))}
                       data-testid="size-input"/>
            </div>
            <button className="btn btn-primary mt-2" onClick={execute} data-testid="process-button">Process</button>

            <hr/>

            <h2>Output</h2>
            <pre data-testid="output">{output}</pre>
        </div>
    )
};
