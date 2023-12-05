import React from 'react';
import './Card.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles, faBurst, faShield } from '@fortawesome/free-solid-svg-icons';


// const creatures = [
//     {
//         name: 'Swinteger',
//         description:
//         'Swinteger is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
//         cardPhoto: cardPhoto,
//         icon: faDroplet,
//     },
//     {
//         name: 'Leafarray',
//         description:
//         'Leafarray is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
//         cardPhoto: cardPhoto2,
//         icon: faLeaf,
//     },
//     {
//         name: 'Varchar',
//         description:
//         'Varchar is a creature that is very rare to find. It is a very powerful creature that can be used to fight other creatures.',
//         cardPhoto: cardPhoto3,
//         icon: faFire,
//     },
// ]


function Card({ creature, userCoins, handlePurchase }) {
  return (
    <div className="card-container">
      <div className="card creature">
        <div className="card-header creature-header">
          <h2 className="card-title creature-title" style={creature.style}>
            {creature.name}{' '}
            {creature.type === 'attacker' && (
              <FontAwesomeIcon icon={faBurst} className="" />
            )}
            {creature.type === 'defender' && (
              <FontAwesomeIcon icon={faShield} className="" />
            )}
            {creature.type === 'trickster' && (
              <FontAwesomeIcon icon={faWandMagicSparkles} className="" />
            )}
          </h2>
        </div>
        <img
          className="card-image creature-image"
          src={creature.image}
          alt="Creature image"
        />
        <p className="card-text creature-text">{creature.description}</p>
      </div>
      <div className="button-container">
        {userCoins >= creature.coinCost && (
          <button
            className="rounded purchase-button"
            onClick={() => handlePurchase(creature.coinCost, creature.name)}
          >
            Purchase for {creature.coinCost} coins
          </button>
        )}
      </div>
    </div>
  );
}



// function Card({creature}) {
//   return (
//     <div id="creatureCard" className="border text-center m-5 col-10 col-lg-3 col-xl-2">
//       <div id='creatureHeader' className='d-flex justify-content-between'>
//         <h2>{creature.attack}</h2>
//         <h2 className=''>{creature.name}</h2>
//         <h2>{creature.defense}</h2>
//       </div>
//       <img id='creatureImage' className="mx-auto col-11 img-fluid" src={creature.image} />
//       <div id='creatureBody'>
//         <section id='creatureMoves' className='d-flex flex-wrap border m-3'>
//           <h3 className='col-6'>Move1</h3>
//           <h3 className='col-6'>Move2</h3>
//           <h3 className='col-6'>Move3</h3>
//           <h3 className='col-6'>Move4</h3>
//         </section>
//         <p>Lorem Ipsum Programon Description</p>
//       </div>
//     </div>
//   )
// }

export default Card;

