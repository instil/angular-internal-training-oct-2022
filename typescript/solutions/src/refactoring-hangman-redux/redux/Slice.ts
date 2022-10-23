import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getRandomMovie} from "../model/Movies";
import {isPossibleGuess} from "../model/Utility";
import {answerCompleteSelector, isGameOverSelector} from "./Selectors";

export const MaxLives = 6;

export const resetGame = createAsyncThunk('ResetGame', async () => {
    return await getRandomMovie();
});

const slice = createSlice({
    name: 'Hangman',
    initialState: {
        isLoading: false,
        answer: '',
        lives: MaxLives,
        guesses: [] as string[],
        warning: '',
        hasWon: false
    },
    reducers: {
        keyPressed(state, action: PayloadAction<string>) {
            function applyGuess(guess: string) {
                const isCorrectGuess = state.answer.toLowerCase().includes(guess);

                if (!isCorrectGuess) state.lives--;
                state.guesses.push(guess);
                state.warning = '';
                state.hasWon = answerCompleteSelector(state);
            }

            const setWarning = (warning: string): void => {
                state.warning = warning;
            }

            const guess = action.payload.toLowerCase();

            if (guess.length !== 1) return;
            if (isGameOverSelector(state)) return;

            if (!isPossibleGuess(guess)) return setWarning(`'${guess}' is not a valid guess`);
            if (state.guesses.includes(guess)) return setWarning('You have already made that guess');

            applyGuess(guess);
        }
    },
    extraReducers: builder => {
        builder.addCase(resetGame.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(resetGame.fulfilled, (state, action) => {
            state.answer = action.payload;
            state.lives = MaxLives;
            state.guesses = [];
            state.hasWon = false;
            state.warning = '';
            state.isLoading = false;
        });
        builder.addCase(resetGame.rejected, (state) => {
            state.isLoading = false;
        });
    }
});

export const reducer = slice.reducer;
export const {keyPressed} = slice.actions;
