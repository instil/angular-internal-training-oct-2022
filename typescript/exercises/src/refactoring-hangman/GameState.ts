export const MaxLives = 6;

export interface GameState {
    answerStr: string;
    livesCount: number;
    hasWon: boolean;
    warningStr: string;
    guessesArray: string[]
}

export const initialGameState: GameState = {
    answerStr: '',
    livesCount: MaxLives,
    guessesArray: [],
    warningStr: '',
    hasWon: false
};
