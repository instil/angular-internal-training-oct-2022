import React, {useState} from "react";
import {dickens} from "./dickens";

export const UniqueWordsExercise = () => {
    const [input, setInput] = useState(dickens);
    const [output, setOutput] = useState("");

    function execute() {
        // TODO: Solutions goes here
        //       Process 'input' string and write result to 'output' string
        //       Output the unique words found in input with the number of times they occur.
        //       Lodash or Ramda may be useful here.

        setOutput("The result is....")
    }

    // --- Ignore ---
    return (
        <div>
            <h2>Text:</h2>
            <div>
                <textarea cols={60} rows={6} value={input}
                          onChange={e => setInput(e.target.value)}/>
            </div>
            <button className="btn btn-primary mt-2" onClick={execute}>Process</button>

            <hr/>

            <h2>Output</h2>
            <pre>{output}</pre>
        </div>
    )
};
