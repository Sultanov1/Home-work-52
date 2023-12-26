import Card from './Card';

class PokerHand {
    private cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    public getOutcome(): string {
        return 'High Card';
    }
}

export default PokerHand;

