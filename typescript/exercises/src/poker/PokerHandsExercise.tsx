import React, {FC, useState} from "react";
import {hands} from "./Hands";
import {calculatePokerHand} from "./PokerHand";

export const PokerHandsExercise: FC = () => {
    const [input, setInput] = useState(hands);
    const [output, setOutput] = useState("");

    function execute() {
        // See PokerHand.js for the location of the exercise
        const result = input
            .split("\n")
            .map(x => x.trim()).filter(x => x !== "")
            .map(calculatePokerHand)
            .join("\n");

        setOutput(result)
    }

    // --- Ignore ---
    return (
        <div>
            <h2>Text:</h2>
            <div>
                <textarea cols={60} rows={6} value={input} onChange={e => setInput(e.target.value)}></textarea>
            </div>
            <button className="btn btn-primary mt-2" onClick={execute}>Process</button>

            <hr/>

            <h2>Output</h2>
            <pre>{output}</pre>
        </div>
    )
};
