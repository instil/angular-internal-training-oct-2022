export const MaxLives = 6;

export interface GameState {
    answer: string;
    lives: number;
    hasWon: boolean;
    warning: string;
    guesses: string[]
}

export const initialGameState: GameState = {
    answer: '',
    lives: MaxLives,
    guesses: [],
    warning: '',
    hasWon: false
};

type GameStatePredicate = (state: GameState) => boolean;

export const isDead: GameStatePredicate = state => state.lives === 0;

export const isGameOver: GameStatePredicate = state => isDead(state) || state.hasWon;
