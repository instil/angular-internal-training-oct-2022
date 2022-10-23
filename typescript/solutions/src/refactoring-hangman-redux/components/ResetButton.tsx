import React, {FC} from "react";
import {useAppSelector} from "../redux/Store";
import {isGameOverSelector} from "../redux/Selectors";
import {useDispatch} from "react-redux";
import {resetGame} from "../redux/Slice";

export const ResetButton: FC = () => {
    const isGameOver = useAppSelector(isGameOverSelector);
    const dispatch = useDispatch();

    const label = isGameOver ? 'Play again!' : 'Reset';
    const buttonClass = isGameOver ? 'primary' : 'danger';

    return (
        <button className={`btn btn-${buttonClass}`}
                onClick={() => dispatch(resetGame())}>
            {label}
        </button>
    );
};
