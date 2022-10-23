import React, {FC, useEffect, useState} from 'react'
import {getRandomMovie} from "./model/Movies";
import {HangmanGameBoard} from "./components/HangmanGameBoard";
import {isPossibleGuess} from "./model/Utility";
import {initialGameState, isGameOver} from "./model/GameState";
import {useKeyDown} from "./hooks/UseKeyDown";
import {Loading} from "./components/Loading";

export const answerComplete = (answer: string, guesses: string[]) =>
    answer
        .split('')
        .filter(isPossibleGuess)
        .every(answerChar => guesses.includes(answerChar));

export const HangmanRefactoringExercise: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [gameState, setGameState] = useState(initialGameState);

    async function resetGame() {
        setIsLoading(true);
        const answer = await getRandomMovie();
        setIsLoading(false);
        setGameState({
            ...initialGameState,
            answer: answer
        });
    }

    useEffect(() => {
        resetGame();
    }, [])

    function makeGuess(guess: string) {
        const answer = gameState.answer.toLowerCase();

        const lives = answer.includes(guess) ? gameState.lives : gameState.lives - 1;
        const guesses = [...gameState.guesses, guess];
        const warning = '';
        const hasWon = answerComplete(answer, guesses);

        setGameState({...gameState, guesses, lives, warning, hasWon});
    }

    useKeyDown(e => {
        const setWarning = (warning: string): void => setGameState({...gameState, warning});

        const guess = e.key.toLowerCase();

        if (guess.length !== 1) return;
        if (isGameOver(gameState)) return;

        if (!isPossibleGuess(guess)) return setWarning(`'${guess}' is not a valid guess`);
        if (gameState.guesses.includes(guess)) return setWarning('You have already made that guess');

        makeGuess(guess);
    });

    return (
        <div>
            <h1>Hangman</h1>
            <div>
                {isLoading
                    ? <Loading/>
                    : <HangmanGameBoard gameState={gameState}
                                        onReset={resetGame}/>}
            </div>
        </div>
    );
}
