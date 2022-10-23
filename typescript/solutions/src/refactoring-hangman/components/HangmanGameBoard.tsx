import React, {FC} from 'react';
import {GameState, isGameOver} from "../model/GameState";
import {Gallows} from "./Gallows";
import {SolutionBoard} from "./SolutionBoard";
import {GameStatus} from "./GameStatus";

interface HangmanGameBoardProps {
    gameState: GameState;
    onReset: () => void;
}

export const HangmanGameBoard: FC<HangmanGameBoardProps> = ({gameState, onReset}) => {
    const {hasWon, guesses, warning, lives, answer} = gameState;

    return <div className='row'>
        <div className='col-auto'>
            <Gallows lives={lives}/>
            <SolutionBoard lives={lives} hasWon={hasWon} answer={answer}
                           guesses={guesses}/>
        </div>
        <div className='col mt-2'>
            <GameStatus lives={lives}
                        guesses={guesses}
                        warning={warning}
                        hasWon={hasWon}/>

            {isGameOver(gameState)
                ? <button className='btn btn-primary' onClick={onReset}>
                    Play Again!
                </button>
                : <button className='btn btn-danger' onClick={onReset}>
                    Reset
                </button>
            }
        </div>
    </div>;
};
