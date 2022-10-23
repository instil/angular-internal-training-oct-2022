import {Warning} from "./Warning";
import React from "react";
import {useAppSelector} from "../redux/Store";

export const GameStatus = () => {
    const lives = useAppSelector(state => state.lives);
    const hasWon = useAppSelector(state => state.hasWon);
    const guesses = useAppSelector(state => state.guesses);
    const warning = useAppSelector(state => state.warning);

    return <div className="my-4">
        <div>
            {lives === 1 ? <Warning/> : null}
            You have {lives} lives left.
        </div>
        <div>
            You have made {guesses.length} guesses
        </div>
        <div>
            [ {[...guesses].sort().join(", ")} ]
        </div>
        <div className="text-danger">
            {warning}
        </div>
        {hasWon
            ? <div className="text-success"> You've won!! </div>
            : null}
    </div>;
};
