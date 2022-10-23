import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./Slice";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const store = configureStore({
    reducer
});

export type AppState = ReturnType<typeof reducer>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
