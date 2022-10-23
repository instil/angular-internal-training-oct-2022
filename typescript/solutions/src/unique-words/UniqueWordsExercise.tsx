import React, {useState} from "react";
import {orderBy} from "lodash";
import {dickens} from "./dickens";

export const UniqueWordsExercise = () => {
    const [input, setInput] = useState(dickens);
    const [output, setOutput] = useState("");

    function execute(): void {
        setOutput("The result is....")
        const words = extractWords(input);
        const wordCounts = countWords(words);
        setOutput(buildWordCountTable(wordCounts));
    }

    // --- Ignore ---
    return (
        <div>
            <h2 data-testid="title">Unique Words</h2>
            <div>
                <textarea data-testid="input-text" cols={60} rows={6} value={input}
                          onChange={e => setInput(e.target.value)}/>
            </div>
            <button data-testid="process-button" className="btn btn-primary mt-2" onClick={execute}>Process</button>

            <hr/>

            <h2>Output</h2>
            <pre data-testid="output">{output}</pre>
        </div>
    )
};

function countWords(words: string[]): Map<string, number> {
    function addToWordCount(word: string) {
        const currentcount = map.get(word) ?? 0;
        map.set(word, currentcount + 1);
    }

    const map = new Map<string, number>();
    words.forEach(addToWordCount);
    return map;
}

function extractWords(input: string): string[] {
    return input.split(/\W+/)
        .map(x => x.toLowerCase().trim())
        .filter(x => x);
}

function buildWordCountTable(wordCounts: Map<string, number>): string {
    const wordCountSelector = [1];
    const sortedWordCounts = orderBy([...wordCounts.entries()], wordCountSelector, ['desc']);

    let table = `Found ${sortedWordCounts.length} unique words\n`;
    for (const [word, count] of sortedWordCounts) {
        table += `${word} = ${count}\n`;
    }
    return table;
}
