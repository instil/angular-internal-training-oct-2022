import {PokerHandBuilder} from "./PokerHandBuilder";

const nonePokerHand = {
    name: () => "Invalid Input"
}

const consoleErrorStrategy = {
    handle: description => console.log(description)
}

export function calculatePokerHand(hand) {
    const words = hand.split(" ");
    const builder = new PokerHandBuilder(consoleErrorStrategy);

    words.forEach(word => builder.addCard(word));
    return builder
        .build()
        .orElse(nonePokerHand)
        .name();
}
