import _ from 'lodash';

const allRanksAceLow = "A23456789TJQK";
const allRanksAceHigh = "23456789TJQKA";

function uniqueCount(items: string[]): number {
    return new Set(items).size;
}

export function calculatePokerHand(hand: string) {
    const cards = hand.split(' ').map(pair => ({rank: pair[0], suit: pair[1]}));
    const ranks = cards.map(x => x.rank);
    const suits = cards.map(x => x.suit);

    const getSortedRanks = (scheme: string) => _.sortBy(ranks, x => scheme.indexOf(x)).join('')
    const getRankCounts = () => _.chain(cards)
        .groupBy(x => x.rank)
        .map(cards => cards.length)
        .value()

    const isRoyalFlush = () => isStraightFlush() && ranks.includes('K') && ranks.includes('A');
    const isStraightFlush = () => isStraight() && isFlush();
    const isStraight = () => isStraightIn(allRanksAceLow) || isStraightIn(allRanksAceHigh);
    const isStraightIn = (scheme: string) => scheme.includes(getSortedRanks(scheme))
    const isFlush = () => uniqueCount(suits) === 1;
    const isFullHouse = () => uniqueCount(ranks) === 2;
    const isThreeOfAKind = () => Math.max(...getRankCounts()) === 3;
    const isFourOfAKind = () => Math.max(...getRankCounts()) === 4;
    const isTwoPair = () => uniqueCount(ranks) < 4;
    const isPair = () => uniqueCount(ranks) < 5;

    if (isRoyalFlush()) return "Royal Flush";
    if (isStraightFlush()) return "Straight Flush";
    if (isFourOfAKind()) return "Four of a Kind";
    if (isStraight()) return "Straight";
    if (isFlush()) return "Flush";
    if (isFullHouse()) return "Full House";
    if (isThreeOfAKind()) return "Three of a Kind";
    if (isTwoPair()) return "Two Pair";
    if (isPair()) return "Pair";
    return "High Card";
}
