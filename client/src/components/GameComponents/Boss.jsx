import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import "./Boss.css";
import "animate.css"

export default function Boss(props) {
  return (
    <div className="boss-container">
      <div
        className={`mx-auto d-flex flex-column align-items-center animate__animated ${props.animation} boss-health`}
      >
        <h2 className="text-light boss-name">{props.bossName}</h2>
        <div className="boss-image animate__animated animate__zoomIn animate__slow animate__delay-3s">
          <img
            className="img-fluid"
            src={props.bossImage}
            alt=""
          />
        </div>
        <div className="boss-health-bar">
          <ProgressBar
            className="my-3 col-12"
            now={props.bossHealth}
            max={props.maxHP}
            label={`${props.bossHealth} HP`}
            variant="danger"
            animated
          />
        </div>
      </div>
    </div>
  );
}
