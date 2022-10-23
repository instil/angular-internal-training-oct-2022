import React, {FC} from "react";

function dayNow(): number {
    return new Date().getDay();
}

function yearNow(): number {
    return new Date().getFullYear();
}

function isoStringNow(): string {
    return new Date().toISOString();
}

// TODO Replace the function definitions above using
//        a Higher order function builder. See usage below.
//      This should be type-safe so we will need to have a way
//        of specifying the 'get' function name as a type and
//        also work out the return type.
//      Hint, you will need a type to represent the valid function
//        names using a mapped type.
//      Hint, there is a utility type which can derive the return type of a function

// const dayNow = buildDateGetter("getDay");
// const yearNow = buildDateGetter("getFullYear");
// const isoStringNow = buildDateGetter("toISOString");

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
