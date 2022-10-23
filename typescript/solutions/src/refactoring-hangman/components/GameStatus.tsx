import {Warning} from "./Warning";
import React from "react";

interface GameStatusProps {
    lives: number;
    guesses: string[];
    warning: string;
    hasWon: boolean;
}

export const GameStatus = ({guesses, hasWon, lives, warning}: GameStatusProps) =>
    <div className="my-4">
        <div>
            {lives === 1 ? <Warning/> : null}
            You have {lives} lives left.
        </div>
        <div>
            You have made {guesses.length} guesses
        </div>
        <div>
            [ {guesses.sort().join(", ")} ]
        </div>
        <div className="text-danger">
            {warning}
        </div>
        {hasWon
            ? <div className="text-success"> You've won!! </div>
            : null}
    </div>;
