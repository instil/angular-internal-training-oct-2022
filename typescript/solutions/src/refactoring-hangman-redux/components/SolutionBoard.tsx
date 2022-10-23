import React from "react";
import {useAppSelector} from "../redux/Store";
import {answerSelector, isDeadSelector, isGameOverSelector, solutionMessageSelector} from "../redux/Selectors";

import "./SolutionBoard.css";

export function SolutionBoard() {
    const isGameOver = useAppSelector(isGameOverSelector);
    const isDead = useAppSelector(isDeadSelector);
    const answer = useAppSelector(answerSelector);
    const solutionMessage = useAppSelector(solutionMessageSelector);

    if (isGameOver) {
        const solutionClass = isDead ? "dead-solution" : "won-solution";
        return <div className={solutionClass}>{answer}</div>
    }

    return <div>{solutionMessage}</div>;
}
