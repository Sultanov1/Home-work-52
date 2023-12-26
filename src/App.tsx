import React, { useState } from 'react';
import Card from './Card/Card';
import CardDeck from './lib/CardDeck';
import PokerHand from './lib/PokerHand';

const App: React.FC = () => {
    const [deck, setDeck] = useState(new CardDeck());
    const [hand, setHand] = useState<Card[]>([]);

    const dealCards = () => {
        const newDeck = new CardDeck();
        setDeck(newDeck);

        const newHand = newDeck.getCards(5);
        setHand(newHand);

        const pokerHand = new PokerHand(newHand);
        const outcome = pokerHand.getOutcome();
        console.log('Poker Hand Outcome:', outcome);
    };

    return (
        <div>
            <h1>Poker</h1>
            {hand.length === 0 ? (
                <button onClick={dealCards}>Раздать карты</button>
            ) : (
                <div>
                    <button onClick={dealCards}>Раздать новые карты</button>
                    <div className="playingCards faceImages">
                        {hand.map((card, index) => (
                            <Card key={index} rank={card.rank} suit={card.suit} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;