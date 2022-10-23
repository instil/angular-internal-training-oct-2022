import React, {FC, useState} from "react";

export const DiamondsExercise: FC = () => {
    const [input, setInput] = useState(7);
    const [output, setOutput] = useState("");

    function execute(): void {
        // TODO: Solutions goes here
        //       Process 'input' number and write result to 'output' string

        setOutput("The result is....")
    }

    // --- Ignore ---
    return (
        <div>
            <h2>Text:</h2>
            <div>
                <label className="mr-2">Height:</label>
                <input type="number" value={input} onChange={e => setInput(Number(e.target.value))}/>
            </div>
            <button className="btn btn-primary mt-2" onClick={execute}>Process</button>

            <hr/>

            <h2>Output</h2>
            <pre>{output}</pre>
        </div>
    )
};
