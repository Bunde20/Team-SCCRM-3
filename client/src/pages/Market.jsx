// src/components/Market.jsx
import React, { useState } from 'react';
import CardList from './CardList';
import UserCredits from './UserCredits';

const cardsData = [
  { id: 1, name: 'Card 1', description: 'Description for Card 1', price: 10 },
  { id: 2, name: 'Card 2', description: 'Description for Card 2', price: 15 },
  // Add more cards as needed
];

const Market = () => {
  const [userCredits, setUserCredits] = useState(100);
  const [userCards, setUserCards] = useState([]);

  const handleBuy = (card) => {
    if (userCredits >= card.price) {
      setUserCredits(userCredits - card.price);
      setUserCards([...userCards, card]);
      alert(`You bought ${card.name} for ${card.price} credits!`);
    } else {
      alert('Insufficient credits to buy this card!');
    }
  };

  return (
    <div className="market">
      <h1>Card Marketplace</h1>
      <UserCredits credits={userCredits} />
      <CardList cards={cardsData} onBuy={handleBuy} />
    </div>
  );
};

export default Marketplace;
