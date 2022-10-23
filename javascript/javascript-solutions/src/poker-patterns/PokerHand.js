import {
    flushVisitor,
    fourOfAKindVisitor,
    fullHouseVisitor,
    pairVisitor, royalFlushVisitor, straightFlushVisitor,
    straightVisitor,
    threeOfAKindVisitor,
    twoPairVisitor
} from "./Visitors";

export class PokerHand {
    constructor(cards) {
        this.cards = cards;
    }

    acceptVisitor(handVisitor) {
        for (const card of this.cards) {
            handVisitor.visit(card);
        }
    }

    applyVisitor(handVisitor) {
        this.acceptVisitor(handVisitor);
        return handVisitor.matches();
    }

    name() {
        if (this.applyVisitor(royalFlushVisitor())) {
            return "Royal Flush";
        }
        if (this.applyVisitor(straightFlushVisitor())) {
            return "Straight Flush";
        }
        if (this.applyVisitor(fourOfAKindVisitor())) {
            return "Four of a Kind";
        }
        if (this.applyVisitor(straightVisitor())) {
            return "Straight";
        }
        if (this.applyVisitor(flushVisitor())) {
            return "Flush";
        }
        if (this.applyVisitor(fullHouseVisitor())) {
            return "Full House";
        }
        if (this.applyVisitor(threeOfAKindVisitor())) {
            return "Three of a Kind";
        }
        if (this.applyVisitor(twoPairVisitor())) {
            return "Two Pair";
        }
        if (this.applyVisitor(pairVisitor())) {
            return "Pair";
        }
        return "High Card";
    }
}
