import React, {FC, useCallback} from 'react';
import {Gallows} from "./Gallows";
import {SolutionBoard} from "./SolutionBoard";
import {GameStatus} from "./GameStatus";
import {ResetButton} from "./ResetButton";
import {Loading} from "./Loading";
import {useAppSelector} from "../redux/Store";
import {isLoadingSelector} from "../redux/Selectors";
import {useDispatch} from "react-redux";
import {useOnce} from "../hooks/UseOnce";
import {keyPressed, resetGame} from "../redux/Slice";
import {useKeyDown} from "../hooks/UseKeyDown";

export const HangmanGameBoard: FC = () => {
    const isLoading = useAppSelector(isLoadingSelector)
    const dispatch = useDispatch();

    useOnce(useCallback(() => dispatch(resetGame()), [dispatch]));
    useKeyDown(e => dispatch(keyPressed(e.key)));

    return isLoading
        ? <Loading/>
        : <div className='row'>
            <div className='col-auto'>
                <Gallows/>
                <SolutionBoard/>
            </div>
            <div className='col mt-2'>
                <GameStatus/>
                <ResetButton/>
            </div>
        </div>;
};
