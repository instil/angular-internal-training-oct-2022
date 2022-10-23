import * as R from 'ramda';

export function sanityCheck() : string {
    const words = ["Checking", "That", "it", "all", "works.", "Looks", "Good"];
    return R.reduce((a, b) => `${a} ${b}`,'', words);
}

console.log(sanityCheck());
