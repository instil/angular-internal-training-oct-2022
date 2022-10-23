import React from "react";
import {isPossibleGuess} from "../model/Utility";

import "./SolutionBoard.css";

function buildSolutionMessage(answer: string, guesses: string[]): string {
    const hasBeenGuessed = (answerChar: string) => guesses.includes(answerChar);

    function solutionSymbol(answerChar: string) {
        if (answerChar === ' ') return (' / ');
        if (isPossibleGuess(answerChar) && !hasBeenGuessed(answerChar.toLowerCase())) return '_';
        return answerChar;
    }

    return answer.split('').map(solutionSymbol).join(' ');
}

interface SolutionBoardProps {
    lives: number;
    hasWon: boolean;
    answer: string;
    guesses: string[];
}

export function SolutionBoard({answer, guesses, hasWon, lives}: SolutionBoardProps) {
    let isDead = lives === 0;

    if (isDead || hasWon) {
        const solutionClass = isDead ? "dead-solution" : "won-solution";
        return <div className={solutionClass}>{answer}</div>
    }

    return <div>{buildSolutionMessage(answer, guesses)}</div>;
}
