import React, { useEffect, useState } from 'react';
import Card from '../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faLeaf, faDroplet } from '@fortawesome/free-solid-svg-icons';
import cardPhoto from '../images/Swinteger.webp';
import cardPhoto2 from '../images/Leafarray.webp';
import cardPhoto3 from '../images/Varchar.webp';
import '../App.css';
import API from '../utils/API'

// const creatures = [
//     {
//       name: 'Swinteger',
//       description: 'Swinteger is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
//       cardPhoto: cardPhoto,
//       icon: faDroplet,
//       style: { color: '#09a8ec' },
//       coinCost: 10, 
//     },
//     {
//       name: 'Leafarray',
//       description: 'Leafarray is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
//       cardPhoto: cardPhoto2,
//       icon: faLeaf,
//       style: { color: '#14eb2d' },
//       coinCost: 15,
//     },
//     {
//       name: 'Varchar',
//       description: 'Varchar is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
//       cardPhoto: cardPhoto3,
//       icon: faFire,
//       style: { color: '#e6650f' },
//       coinCost: 20,
//     },
//   ];

export default function Marketplace() {

  // state variable for card data
  const [cards, setCards] = useState([]);

  useEffect(() => {

    // set state after api call
    API.getAllCards()
    .then((res) => {
      setCards(res.data)
    })

  }, [])

  return (
    <>
      <h1 className="text-center align-items-center justify-content-center">Marketplace</h1>
      <div className="card-container">
        {cards.map((creature, index) => (
          <div className="col" key={index}>
            <Card creature={creature} />
          </div>
        ))}
      </div>
    </>
  );
}
