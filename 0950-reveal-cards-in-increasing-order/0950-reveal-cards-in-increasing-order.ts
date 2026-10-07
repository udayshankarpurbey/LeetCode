function deckRevealedIncreasing(deck: number[]): number[] {

    deck.sort((a: number, b: number) => a - b);
    if (deck.length < 2) return deck;
    let s = `${deck[deck.length - 1]}`;

    for (let i = 1; i < deck.length; i++) {
        if (i < 2) {
            s = `${(deck[deck.length - i - 1])},` + s
        }
        else {
            s = `${deck[deck.length - i - 1]},` + `${s.split(',').slice(-1)},` + s.split(',').slice(0, -1).join(',')
        }
    }

    return s.split(',').map((c: string) => Number(c));
};