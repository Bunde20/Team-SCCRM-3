import React from 'react';
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faLeaf, faDroplet } from '@fortawesome/free-solid-svg-icons';
import cardPhoto from '../images/Swinteger.webp';
import cardPhoto2 from '../images/Leafarray.webp';
import cardPhoto3 from '../images/Varchar.webp';

const creatures = [
    {
        name: 'Swinteger',
        description:
        'Swinteger is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
        cardPhoto: cardPhoto,
        icon: faDroplet,
    },
    {
        name: 'Leafarray',
        description:
        'Leafarray is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
        cardPhoto: cardPhoto2,
        icon: faLeaf,
    },
    {
        name: 'Varchar',
        description:
        'Varchar is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
        cardPhoto: cardPhoto3,
        icon: faFire,
    },
]

function Card({ creature }) {
  // const [isPurchased, setPurchased] = useState(false);

  // const handlePurchase = () => {
  //   // Implement logic to deduct coins and add the creature to the user's collection
  //   // For demonstration purposes, just toggle the purchased state
  //   setPurchased(!isPurchased);
  // };
return (
  <div>
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
        src={creature.image}
        alt="Creature image"
      />
      <p className="card-text">{creature.description}</p>
      {/* {!isPurchased && (
        <button className="purchase-button" onClick={handlePurchase}>
          Purchase for {creature.coinCost} coins
        </button> */}
      {/* )} */}
    </div>
  </div>
);
}

export default Card;

