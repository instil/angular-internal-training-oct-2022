import React, {CSSProperties, FC} from 'react';
import {GameState, MaxLives} from "./GameState";
import {testChar} from "./Utility";

const resetStyle: CSSProperties = {
    marginTop: 30,
};

function buildSolutionMessage(answer: string, guesses: string[]): string {
    var chArray = answer.split('');
    var resArray: string[] = [];
    for (let c of chArray) {
        if (c !== ' ') {
            if (testChar(c.toLowerCase())) {
                resArray.push(guesses.includes(c.toLowerCase()) ? c : '_');
            } else {
                resArray.push(c);
            }
        } else {
            resArray.push(' / ');
        }
    }
    return resArray.join(' ');
}

interface HangmanGameBoardProps {
    gameState: GameState;
    onReset: () => void;
}

export const HangmanGameBoard: FC<HangmanGameBoardProps> = ({onReset, gameState: {guessesArray, livesCount, answerStr, warningStr, hasWon}}) => {
    var livesWarning = livesCount === 1 ? <span className='text-danger'>Careful!! </span> : null;
    var stage = MaxLives - livesCount;

    return (
      <>
          <div className='row'>
              <div className='col-auto'>
                  {/* Gallows Graphic */}
                  <div className={`gallows gallows-stage-${stage}`}/>
                  {/* *************** */}

                  {/* Ongoing Solution */}
                  <div style={{
                      color: livesCount === 0
                        ? 'red'
                        : hasWon ? 'green' : 'black'
                  }}>
                      {livesCount === 0 || hasWon
                        ? answerStr
                        : buildSolutionMessage(answerStr, guessesArray)}
                  </div>
                  {/* ***************** */}
              </div>
              <div style={resetStyle} className='col'>
                  {/* Game Status */}
                  <div style={{margin: '30px 0px'}}>
                      <div>
                          {livesWarning}You have {livesCount} lives left.
                      </div>
                      <div>
                          You have made {guessesArray.length} guesses
                      </div>
                      <div>
                          [ {guessesArray.sort().join(", ")} ]
                      </div>
                      <div className='text-danger'>
                          {warningStr}
                      </div>
                      {hasWon
                        ? <div className='text-success'>
                            You've won!!
                        </div>
                        : null}
                  </div>
                  {/* ************** */}

                  {livesCount === 0 || hasWon
                    ? <button className='btn btn-primary' onClick={onReset}>
                        Play Again!
                    </button>
                    : <button className='btn btn-danger' onClick={onReset}>
                        Reset
                    </button>
                  }
              </div>
          </div>
      </>
    );
};
