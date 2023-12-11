import React from "react";
import "./Card.css";
import "animate.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faBurst,
  faShield,
  faHeart,
  faBullseye
} from "@fortawesome/free-solid-svg-icons";

function Card({ creature }) {
  return (
    <div className="card-container animate__animated animate__flipInY animate__faster" id='creatureCard'>
      <div className={`card creature ${creature.type}-bg`}>
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
        <div className="d-flex justify-content-between stats">
          <div className="d-flex health-container"> 
          <p className="">{creature.health}</p>
            <FontAwesomeIcon className="fs-4 mt-1 mx-1 health-icon" icon={faHeart}/>
          </div>
          <div className="d-flex attack-container"> 
          <p className="">{creature.attack}</p>
            <FontAwesomeIcon className="fs-4 mt-1 mx-1 attack-icon" icon={faBullseye}/>
          </div>
              
        </div>
      </div>
    </div>
  );
}

export default Card;
