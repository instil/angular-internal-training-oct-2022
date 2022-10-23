import React, {FC} from "react";

const data = [
    "A man, a plan, a canal, Panama",
    "Gold is where you find it",
    "If I had a hi-fi",
    "Fortune favors the prepared mind",
    "Rats live on no evil star",
    "There is no abstract living",
    "Some men interpret nine memos"
];

export const PalindromesExercise: FC = () => {
    const solution = () => {
        let output = ""
        for(let str of data) {
            output += `"${str}" might be a palindrome\n`;
        }
        return output;
    };

    const output = solution();

    // --- Ignore ---
    return (
        <div>
            <h3>Output</h3>
            <pre>{output}</pre>
        </div>
    )
};
