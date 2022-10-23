import React, {FC, useEffect, useState} from 'react'
import {getRandomMovie} from "./Movies";
import {HangmanGameBoard} from "./HangmanGameBoard";
import {testChar} from "./Utility";
import {initialGameState} from "./GameState";

import "./HangmanRefactoringExercise.css";

export const HangmanRefactoringExercise: FC = () => {
  const [showSpinnerFlag, setShowSpinnerFlag] = useState(false);
  const [gameState, setGameState] = useState(initialGameState);

  // Reset the game on first load
  useEffect(() => {
    setShowSpinnerFlag(true);
    getRandomMovie()
      .then(answer => {
        setShowSpinnerFlag(false);
        setGameState({
          ...initialGameState,
          answerStr: answer
        });
      });
  }, [])

  // Set up key press handler
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  function onKeyDown(e: KeyboardEvent) {
    var guess = e.key.toLowerCase();
    if (guess.length === 1) {
      // If game already over, return
      if (gameState.livesCount === 0 || gameState.hasWon) {
        return;

      // If player has already made that guess, return with warning
      } else if (gameState.guessesArray.includes(guess)) {
        setGameState({
          ...gameState,
          warningStr: 'You have already made that guess'
        });
        return;

      // If character is not a valid guess, return with warning
      } else if (!testChar(guess)) {
        setGameState({
          ...gameState,
          warningStr: `'${guess}' is not a valid guess`
        });
        return;

      } else { // Valid guess
        var answer = gameState.answerStr.toLowerCase();
        var lives: number;
        if (answer.includes(guess)) {
          lives = gameState.livesCount;
        } else {
          lives = gameState.livesCount - 1;
        }

        let guesses = gameState.guessesArray.concat([guess]);

        // Check if won
        let hasWon = true;
        for (let i = 0; i < answer.length; i++) {
          var char = answer[i];
          if (testChar(char)) {
            if (!guesses.includes(char)) {
              hasWon = false;
              break;
            }
          }
        }

        setGameState({
          ...gameState,
          guessesArray: guesses,
          warningStr: '',
          livesCount: lives,
          hasWon: hasWon
        });
      }
    } else {
      return;
    }
  }

  return (
    <div>
      <h1>Hangman</h1>
      <div>
        {showSpinnerFlag
          ? <h1>Loading... <span className='lds-dual-ring'/></h1>
          : <HangmanGameBoard gameState={gameState}
                              onReset={() => {
                                setShowSpinnerFlag(true);
                                getRandomMovie()
                                  .then(answer => {
                                    setShowSpinnerFlag(false);
                                    setGameState({
                                      ...initialGameState,
                                      answerStr: answer
                                    });
                                  });
                              }}/>}
      </div>
    </div>
  );
}
