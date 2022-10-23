import {calculatePokerHand} from "./PokerHand";

describe('Poker Hand', () => {
    [
        {hand: 'AH 2H 3H 4H 6S', expectedName: 'High Card', testName: 'Basic High Card'},
        {hand: 'KH QH JH TH 8S', expectedName: 'High Card', testName: 'Basic High Card - Reverse order'},
        {hand: 'AH AS 3H 4H 6S', expectedName: 'Pair', testName: 'Pair At Start'},
        {hand: 'AH 2H 3H 4H 2S', expectedName: 'Pair', testName: 'Pair spaced out'},
        {hand: 'AH AS 2H 2S 3D', expectedName: 'Two Pair', testName: 'Two Pair Together'},
        {hand: 'AH 2H 3D 2S AS', expectedName: 'Two Pair', testName: 'Two Pair Interleaved'},
        {hand: '5H 2H 5C 3D 5S', expectedName: 'Three of a Kind', testName: 'Three of a Kind'},
        {hand: 'AH 2H 3H 4H 6H', expectedName: 'Flush', testName: 'Flush Hearts'},
        {hand: '8D TD JD QD KD', expectedName: 'Flush', testName: 'Flush Diamonds'},
        {hand: '5D 7D 6D 8D 4H', expectedName: 'Straight', testName: 'Middle Straight'},
        {hand: '5D 4D 3D 2D AH', expectedName: 'Straight', testName: 'Ace Low Straight'},
        {hand: 'TD JD QD KD AH', expectedName: 'Straight', testName: 'Ace High Straight'},
        {hand: '5H 5C 5D 3D 5S', expectedName: 'Four of a Kind', testName: 'Four of a Kind'},
        {hand: 'TD JD QD KD 9D', expectedName: 'Straight Flush', testName: 'Straight Flush'},
        {hand: 'TD JD QD KD AD', expectedName: 'Royal Flush', testName: 'Royal Flush'},
    ].forEach(({hand, expectedName, testName}) =>
        it(`Produces correct hand name - ${testName}`, () => {
            expect(calculatePokerHand(hand)).toEqual(expectedName);
        })
    );
});
