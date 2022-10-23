import React, {FC} from "react";

// TODO Implement your own FP functions
//        To support any data type, they must be generic functions.

// TODO - Add filter and map functions
//        They should be lazy (generator) functions which take
//        the collection and a function for processing.
//        Note, if the generator is a stretch, implement eagerly
// TODO - Add Reduce function
//        Hint, this may be easiest to implement using function overloads


export const LazyFpExercise: FC = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const words = "This is a sentence with a variety of words".split(' ');

    // TODO - Replace the literals with the uncommented code after implementing each function
    const oddNumbers = [0]; // [...filter(numbers, x => x % 2 === 1)];
    const longWords = ['']; // [...filter(words, x => x.length > 4)];

    const numberAsStars = ['']; // [...map(numbers, x => "*".repeat(x))];
    const wordLengths = [0]; // [...map(words, x => x.length)];

    const sum = 0; // reduce(numbers, (previous, current) => current + previous);
    const totalLength = 0; // reduce(words, (previous, current) => previous + current.length, 0);

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
