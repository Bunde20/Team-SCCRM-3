import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faLeaf, faDroplet } from '@fortawesome/free-solid-svg-icons';
import cardPhoto from '../../images/Swinteger.webp';
import cardPhoto2 from '../../images/Leafarray.webp';
import cardPhoto3 from '../../images/Varchar.webp';
import '../../App.css';

const creatures = [
  {
    name: 'Swinteger',
    description: 'Swinteger is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
    cardPhoto: cardPhoto,
    icon: faDroplet,
    style: { color: '#09a8ec' },
    coinCost: 10,
  },
  {
    name: 'Leafarray',
    description: 'Leafarray is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
    cardPhoto: cardPhoto2,
    icon: faLeaf,
    style: { color: '#14eb2d' },
    coinCost: 15,
  },
  {
    name: 'Varchar',
    description: 'Varchar is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
    cardPhoto: cardPhoto3,
    icon: faFire,
    style: { color: '#e6650f' },
    coinCost: 20,
  },
];

export default function Marketplace() {
  const [userCoins, setUserCoins] = useState(50);

  const handlePurchase = (cost, name) => {
    if (userCoins >= cost) {
      setUserCoins(userCoins - cost);
      console.log(`Purchased ${name} for ${cost} coins`);
    } else {
      alert('Not enough coins!');
    }
  };

  return (
    <>
      <h1 className="text-center align-items-center justify-content-center">Marketplace</h1>
      <div className="card-container">
        {creatures.map((creature, index) => (
          <div className="col" key={index}>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title ">{creature.name}</h2>
                <FontAwesomeIcon
                  icon={creature.icon}
                  style={creature.style}
                  className="fa-2x"
                />
              </div>
              <img
                className="card-image"
                src={creature.cardPhoto}
                alt="Creature image"
              />
              <p className="card-text">{creature.description}</p>
              {userCoins >= creature.coinCost && (
                <button className="purchase-button" onClick={() => handlePurchase(creature.coinCost, creature.name)}>
                  Purchase for {creature.coinCost} coins
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div>
        <p>User Coins: {userCoins}</p>
      </div>
    </>
  );
}