import {createSelector} from "@reduxjs/toolkit";
import {AppState} from "./Store";
import {isPossibleGuess} from "../model/Utility";

export const isDeadSelector = (state: AppState) => state.lives === 0;
export const hasWonSelector = (state: AppState) => state.hasWon;
export const isLoadingSelector = (state: AppState) => state.isLoading;
export const answerSelector = (state: AppState) => state.answer;
export const guessesSelector = (state: AppState) => state.guesses;

export const isGameOverSelector = createSelector(
    isDeadSelector, hasWonSelector,
    (isDead, hasWon) => isDead || hasWon
);

export const solutionMessageSelector = createSelector(
    answerSelector, guessesSelector,
    (answer, guesses) => {
        const hasBeenGuessed = (answerChar: string) => guesses.includes(answerChar);

        function solutionSymbol(answerChar: string) {
            if (answerChar === ' ') return (' / ');
            if (isPossibleGuess(answerChar) && !hasBeenGuessed(answerChar.toLowerCase())) return '_';
            return answerChar;
        }

        return answer.split('').map(solutionSymbol).join(' ');
    }
);

export const answerCompleteSelector = createSelector(
    answerSelector, guessesSelector,
    (answer, guesses) => answer
        .toLowerCase()
        .split('')
        .filter(isPossibleGuess)
        .every(answerChar => guesses.includes(answerChar))
);
