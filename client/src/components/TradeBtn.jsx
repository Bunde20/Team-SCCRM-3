import React from "react";

import tradeAPI from "../utils/tradeAPI";

export default function TradeButton(props) {
  const handleTrade = (user1, card1, user2, card2) => {
    tradeAPI.completeTrade(user1, card1, user2, card2);
    console.log(user1, card1, user2, card2);
    console.log('TRADE SUCCESS!');
  };

  return (
    <>
      <button
        onClick={() => handleTrade(props.user1, props.card1, props.user2, props.card2)}
        className="fs-1 home-btn-cstm rounded p-1"
      >
        COMPLETE TRADE
      </button>
    </>
  );
}
