import React, {FC} from "react";

function* filter<T>(items: T[], predicate: (input: T) => boolean): Generator<T> {
    for (const item of items) {
        if (predicate(item)) yield item;
    }
}

function* map<T, U>(items: T[], transform: (input: T) => U): Generator<U> {
    for (const item of items) {
        yield transform(item);
    }
}

function reduce<T>(items: T[], reducer: (previous: T, current: T) => T): T;
function reduce<T, U>(items: T[], reducer: (previous: U, current: T) => U, initial: U): U;
function reduce<T, U = T>(items: T[], reducer: (previous: U, current: T) => U, initial?: U): U {
    if (items.length === 0) throw new Error('There must be some items in a reduced collection');

    let result: U = initial ?? (items[0] as unknown as U);
    let remaining = initial !== undefined ? items : items.slice(1);

    for (const item of remaining) {
        result = reducer(result, item);
    }
    return result;
}

export const LazyFpExercise: FC = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const words = "This is a sentence with a variety of words".split(' ');

    // TODO - Replace the literals with the uncommented code after implementing each function
    const oddNumbers = [...filter(numbers, x => x % 2 === 1)];
    const longWords = [...filter(words, x => x.length > 4)];

    const numberAsStars = [...map(numbers, x => "*".repeat(x))];
    const wordLengths = [...map(words, x => x.length)];

    const sum = reduce(numbers, (previous, current) => current + previous);
    const totalLength = reduce(words, (previous, current) => previous + current.length, 0);

    return (
        <div>
            <h2>Numbers: {numbers.join(', ')}</h2>
            <h3>Odd: {oddNumbers.join(', ')}</h3>
            <h3>As Stars: {numberAsStars.join(', ')}</h3>
            <h3>Sum: {sum}</h3>
            <hr/>
            <h2>Words: {words.join(', ')}</h2>
            <h3>Long words: {longWords.join(', ')}</h3>
            <h3>Word Lengths: {wordLengths.join(', ')}</h3>
            <h3>Total Lengths: {totalLength}</h3>
        </div>
    )
}
