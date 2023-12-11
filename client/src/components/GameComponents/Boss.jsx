import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import "./Boss.css";
import "animate.css"

export default function Boss(props) {
  return (
    <div className="col-12 col-xl-3 mx-auto d-flex flex-column align-items-center">
      <h2 className="text-light">{props.bossName}</h2>
      <div>
        <img className="boss-image img-fluid animate__animated animate__zoomIn animate__slow animate__delay-3s" src={props.bossImage} alt="" />
      </div>
      <ProgressBar
        className="my-3 col-12"
        now={props.bossHealth}
        max={props.maxHP}
        label={`${props.bossHealth} HP`}
        variant="danger"
        animated
      />
    </div>
  );
}
