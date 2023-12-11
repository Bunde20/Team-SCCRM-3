import React, { useState, useEffect } from "react";
import tradeAPI from "../utils/tradeAPI";

export default function SeekCardBtn(props) {
    
  const handleClick = () => {
    const userId = localStorage.getItem("currentUser");
    tradeAPI.createNewTradeOffer(
      userId,
      props.offeredCreature._id,
      props.creature._id
    );
    props.handleClose();
  };

  return (
    <>
      <div className="button-container mb-2">
        <button className="rounded purchase-button" onClick={handleClick}>
          Seek {props.creature.name}!
        </button>
      </div>
    </>
  );
}
