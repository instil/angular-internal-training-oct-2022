import React, {FC} from 'react'
import {HangmanGameBoard} from "./components/HangmanGameBoard";
import {Provider} from "react-redux";
import {store} from "./redux/Store";

export const HangmanRefactoringReduxExercise: FC = () =>
    <Provider store={store}>
        <div>
            <h1>Hangman</h1>
            <HangmanGameBoard/>
        </div>
    </Provider>;
