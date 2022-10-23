import React, {useState} from "react";
import {orderBy} from "lodash";
import {dickens} from "./dickens";

export const UniqueWordsExercise = () => {
    const [input, setInput] = useState(dickens);
    const [output, setOutput] = useState("");

    function execute() {
        setOutput("The result is....")
        const words = extractWords(input);
        const wordCounts = countWords(words);
        setOutput(buildWordCountTable(wordCounts));
    }

    function buildWordCountTable(wordCounts) {
        const sortedWordCounts = orderBy([...wordCounts.entries()], ['1'], ['desc']);

        let table = `Found ${sortedWordCounts.length} unique words\n`;
        for (const [word, count] of sortedWordCounts) {
            table += `${word} = ${count}\n`;
        }
        return table;
    }

    function extractWords(input) {
        return input.split(/[^a-zA-Z']+/)
            .map(x => x.toLowerCase().trim())
            .filter(x => x);
    }

    function countWords(words) {
        const map = new Map();
        words.forEach(word => addToWordCount(map, word));
        return map;
    }

    function addToWordCount(map, word) {
        const currentcount = map.get(word) || 0;
        map.set(word, currentcount + 1);
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
