function deckRevealedIncreasing(deck: number[]): number[] {

    deck.sort((a: number, b: number) => a - b);
    if (deck.length < 2) return deck;
    let newDeck = [deck[deck.length - 1]];

    for (let i = 1; i < deck.length; i++) {
        const last = newDeck.pop();
        newDeck.unshift(deck[deck.length - i - 1] ,last)
    }

    return newDeck;
};