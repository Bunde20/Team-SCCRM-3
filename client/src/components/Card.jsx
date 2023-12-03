import React from 'react';
import './Card.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faLeaf, faDroplet } from '@fortawesome/free-solid-svg-icons';
import cardPhoto from '../images/Swinteger.webp';
import cardPhoto2 from '../images/Leafarray.webp';
import cardPhoto3 from '../images/Varchar.webp';

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

function Card({creature}) {
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
          alt="Monster image"
        />
        <p className="card-text">{creature.description}</p>
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

