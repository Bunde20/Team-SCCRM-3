import { useState } from 'react';
import Card from './components/Card';
import cardPhoto from './images/Swinteger.webp';
import cardPhoto2 from './images/Varchar.webp';
import cardPhoto3 from './images/Leafarray.webp';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const creatures = [
  {
    name: 'Swinteger',
    icon: faDroplet,
    cardPhoto: cardPhoto,
    description: 'Squirtle\'s long lost brother',
  },
  {
    name: 'Varchar',
    icon: faFire,
    cardPhoto: cardPhoto2,
    description: 'Charmander\'s roided uncle',
  },
  {
    name: 'Leafarray',
    icon: faLeaf,
    cardPhoto: cardPhoto3,
    description: 'Bulbie\'s long lost cousin',
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="d-flex flex-row">
      {creatures.map((creature) => {
        return (
          <Card
            name={creature.name}
            icon={creature.icon}
            cardPhoto={creature.cardPhoto}
            description={creature.description}
          />
        );
      })}
      </div>
    </>
  );
}

export default App;
