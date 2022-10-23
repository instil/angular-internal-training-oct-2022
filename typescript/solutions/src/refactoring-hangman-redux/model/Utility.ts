
export function isPossibleGuess(letter: string): boolean {
    return letter.length === 1 && /[a-z0-9]/i.test(letter);
}
