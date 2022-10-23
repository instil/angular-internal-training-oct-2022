import React, {useState} from "react";

export const DiamondsExercise = () => {
    const [height, setHeight] = useState(7);
    const [output, setOutput] = useState("");

    function execute() {
        // TODO: Solutions goes here
        //       Process 'input' number and write result to 'output' string
        //       Output a diamond of height 'height' as a text block.
        //       The height will always be odd
        setOutput("Diamond should appear here");
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
            <pre>{output}</pre>
        </div>
    )
};
