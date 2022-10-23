import React, {FC} from "react";
import {MaxLives} from "../model/GameState";

import "./Gallows.css";

interface GallowsProps {
    lives: number
}

export const Gallows: FC<GallowsProps> = ({lives}) => {
    const stage = MaxLives - lives;
    return <div className={`gallows gallows-stage-${stage}`}/>;
};
