import React from "react";

import tradeAPI from "../utils/tradeAPI";

export default function TradeButton(props) {
  const handleTrade = (user1, card1, user2, card2, offerId) => {
    tradeAPI.completeTrade(user1, card1, user2, card2);
    tradeAPI.deleteOneTradeOffer(offerId);
  };

  return (
    <>
      <button
        onClick={() =>
          handleTrade(
            props.user1,
            props.card1,
            props.user2,
            props.card2,
            props.offerId
          )
        }
        className="fs-1 home-btn-cstm rounded p-1"
      >
        COMPLETE TRADE
      </button>
    </>
  );
}
