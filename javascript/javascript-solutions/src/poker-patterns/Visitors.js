import _ from 'lodash';

const allRanksAceLow = "A2345678910JQK";
const allRanksAceHigh = "2345678910JQKA";

class PokerHandVisitor {
    constructor() {
        this.ranks = [];
        this.suits = [];
        this.cards = [];
    }

    visit(card) {
        this.ranks.push(card.rank);
        this.suits.push(card.suit);
        this.cards.push(card);
    }

    matches() {
        return false;
    }

    uniqueRankCount() {
        return new Set(this.ranks).size;
    }

    uniqueSuitCount() {
        return new Set(this.suits).size;
    }

    rankCounts() {
        return _.chain(this.cards)
            .groupBy(x => x.rank)
            .map(cards => cards.length)
            .value()
    }

    checkRankCount(expected) {
        const counts = this.rankCounts();
        return Math.max(...counts) === expected;
    }

    sortedRanks(scheme) {
        return _.sortBy(this.ranks, x => scheme.indexOf(x)).join('');
    }

    isStraightIn(scheme) {
        return scheme.includes(this.sortedRanks(scheme))
    }
}

class CompositeVisitor {
    constructor(...visitors) {
        this.visitors = visitors;
    }

    visit(card) {
        this.visitors.forEach(visitor => visitor.visit(card));
    }

    matches() {
        return _.every(this.visitors, visitor => visitor.matches());
    }
}

class PairVisitor extends PokerHandVisitor {
    matches() {
        return this.uniqueRankCount() < 5;
    }
}

class TwoPairVisitor extends PokerHandVisitor {
    matches() {
        return this.uniqueRankCount() < 4;
    }
}

class FlushVisitor extends PokerHandVisitor {
    matches() {
        return this.uniqueSuitCount() === 1;
    }
}

class FullHouseVisitor extends PokerHandVisitor {
    matches() {
        return this.uniqueRankCount() === 2;
    }
}

class StraightVisitor extends PokerHandVisitor {
    matches() {
        return this.isStraightIn(allRanksAceLow) || this.isStraightIn(allRanksAceHigh);
    }
}

class FourOfAKindVisitor extends PokerHandVisitor {
    matches() {
        return this.checkRankCount(4);
    }
}

class ThreeOfAKindVisitor extends PokerHandVisitor {
    matches() {
        return this.checkRankCount(3);
    }
}

class RoyaltyVisitor extends PokerHandVisitor {
    matches() {
        return this.ranks.includes('K') && this.ranks.includes('A');
    }
}

export const pairVisitor = () => new PairVisitor();
export const twoPairVisitor = () => new TwoPairVisitor();
export const threeOfAKindVisitor = () => new ThreeOfAKindVisitor();
export const fullHouseVisitor = () => new FullHouseVisitor();
export const flushVisitor = () => new FlushVisitor();
export const straightVisitor = () => new StraightVisitor();
export const fourOfAKindVisitor = () => new FourOfAKindVisitor();
export const straightFlushVisitor = () => new CompositeVisitor(new FlushVisitor(), new StraightVisitor());
export const royalFlushVisitor = () => new CompositeVisitor(straightFlushVisitor(), new RoyaltyVisitor());
