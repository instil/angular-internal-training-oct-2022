import React, {FC} from "react";

type Getter<T> = {[K in keyof T]: T[K] extends () => any ? K : never}[keyof T]

function buildDateGetter<K extends Getter<Date>, F extends Date[K]>(method: K): () => ReturnType<F> {
    return () => (new Date())[method]() as ReturnType<F>;
}

const dayNow = buildDateGetter("getDay");
const yearNow = buildDateGetter("getFullYear");
const isoStringNow = buildDateGetter("toISOString");

export const MappedTypeDateExercise: FC = () => {
    const dayNowResult: number = dayNow();
    const yearNowResult: number = yearNow();
    const isoNowResult: string = isoStringNow();
    return (
        <div>
            <h2>Day Now: {dayNowResult}</h2>
            <h2>Year Now: {yearNowResult}</h2>
            <h2>ISO Now: {isoNowResult}</h2>
        </div>
    )
}
