import React from "react";
import "./Card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faBurst,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

function Card({ creature, userCoins, handlePurchase }) {
  return (
    <div className="card-container">
      <div className="card creature">
        <div className="card-header creature-header">
          <h2 className="card-title creature-title" style={creature.style}>
            {creature.name}{" "}
            {creature.type === "attacker" && (
              <FontAwesomeIcon icon={faBurst} className="" />
            )}
            {creature.type === "defender" && (
              <FontAwesomeIcon icon={faShield} className="" />
            )}
            {creature.type === "trickster" && (
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
    </div>
  );
}

export default Card;
