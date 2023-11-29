import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title ">{props.name}</h2>
          <FontAwesomeIcon
            icon={props.icon}
            style={{ color: '#09a8ec' }}
            className="fa-2x"
          />
        </div>
        <img className="card-image" src={props.cardPhoto} alt="Swinteger" />
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
