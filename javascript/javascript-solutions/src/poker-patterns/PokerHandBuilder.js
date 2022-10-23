import {PokerHand} from "./PokerHand";
import {None, Some} from "./Optional";
import {Card} from "./Card";

export class PokerHandBuilder {
    constructor(errorStrategy) {
        this.errorStrategy = errorStrategy;
        this.cards = [];
    }

    addCard(text) {
        if (this.cards.length > 5) {
            this.errorStrategy.handle("Already have five cards");
            return;
        }

        let rank = "";
        let suit = "";
        if (text.startsWith("10")) {
            rank = "10";
            suit = text[2]
        } else {
            rank = text[0];
            suit = text[1];
        }
        this.cards.push(new Card(rank, suit));
    }

    build() {
        if (this.cards.length < 5) {
            this.errorStrategy.handle("Too few cards");
            return None();
        }

        return Some(new PokerHand(this.cards));
    }
}
