import React, {FC, useState} from "react";
import {dickens} from "./dickens";

export const UniqueWordsExercise: FC = () => {
  const [input, setInput] = useState(dickens);
  const [output, setOutput] = useState("");

  function execute() {
    // TODO: Solutions goes here
    //       Process 'input' string and write result to 'output' string

    // Examples
    // "The the the a a" would produce
    // `
    // the = 3
    // a = 2
    // `
    // Not the case-insensitive result
    //
    // "When in Rome, do as the Romans do."
    // `
    // do = 2
    // when = 1
    // in = 1
    // rome = 1
    // as = 1
    // the = 1
    // `
    // Note, sorted by occurrence

    setOutput(`The result goes here`)
  }

  // --- Ignore ---
  return (
    <div>
      <h2>Text:</h2>
      <div>
        <textarea cols={60} rows={6} value={input} onChange={e => setInput(e.target.value)}/>
      </div>
      <button className="btn btn-primary mt-2" onClick={execute}>Process</button>

      <hr/>

      <h2>Output</h2>
      <pre>{output}</pre>
    </div>
  )
};
