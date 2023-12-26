import React from 'react';

interface CardProps {
    rank: string;
    suit: string;
}

const Card: React.FC<CardProps> = ({ rank, suit }) => {
    return (
        <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{suit === 'diams' ? '♦' : suit === 'hearts' ? '♥' : suit === 'clubs' ? '♣' : '♠'}</span>
    </span>
    );
};

export default Card;