import React, {FC} from "react";
import {useAppSelector} from "../redux/Store";

import "./Gallows.css";
import {MaxLives} from "../redux/Slice";

export const Gallows: FC = () => {
    const lives = useAppSelector(state => state.lives);
    const stage = MaxLives - lives;

    return <div className={`gallows gallows-stage-${stage}`}/>;
};
