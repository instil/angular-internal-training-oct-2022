import React, {useState} from "react";

export const NumberConverterExercise = () => {
    const [input, setInput] = useState(7);
    const [output, setOutput] = useState("");

    function execute() {
        // TODO: Solutions goes here
        //       Process 'input' number and write result to 'output' string
        setOutput(`${input} in words is FOO`);
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
