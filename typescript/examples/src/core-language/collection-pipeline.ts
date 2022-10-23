
const words = "This is a sentence that has been tokenised into words".split(' ');


// filter - A subset of the original collection
const shortWords = words.filter(word => word.length < 5);


// map - transform each element in a collection into something else
const wordLengths = words.map(word => word.length);


// Chaining methods
const shortWordLengths = words
  .filter(word => word.length < 5)
  .map(word => word.length);


// every - test if all elements in a collection satisfy some predicate/test/condition
const areAllWordsLong = words.every(word => word.length > 5);


// some - test if any (or least 1) element satisfies a predicate
const anyLongWords = words.some(word => word.length > 5);


// find - finds the first element to satisfy a predicate
const firstLongWord = words.find(word => word.length > 5);


// flatMap - maps to a collection but flattens/concatenates the results
const lettersForEachWord: string[][] = words.map(word => word.split(''));
const allLetters: string[] = words.flatMap(word => word.split(''));

// forEach - do something for each item in the collection
const runForEach = () => words.forEach(word => console.log(word));


// Reduce - works towards a final result, one item at a time

// This, is => Thisis
// Thisis, a => Thisisa
// Thisisa, sentence => Thisisasentence
// ...
const concatenatedString = words.reduce((previousResult, currentItem) => previousResult + currentItem);

// 0, This = > 4
// 4, is => 6
// 6, a => 7
// 7, sentence => 15
// ...
const totalLength = words.reduce((previousResult, currentItem) => previousResult + currentItem.length, 0);

export function showCollectionPipeline() {

    console.log('Original Words  : ', words);
    console.log('Filter          : ', shortWords);
    console.log('Map             : ', wordLengths);
    console.log('Chaining        : ', shortWordLengths);
    console.log('Every           : ', areAllWordsLong);
    console.log('Some            : ', anyLongWords);
    console.log('Find            : ', firstLongWord);
    console.log('Map to array    : ', lettersForEachWord);
    console.log('flatMap         : ', allLetters);
    console.log('forEach         :');
    runForEach();
    console.log('Reduce          :', concatenatedString);
    console.log('Reduce with seed:', totalLength);
}
