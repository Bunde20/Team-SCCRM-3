import React, { useState, useEffect } from "react";
import tradeAPI from "../utils/tradeAPI";
import AlertModal from "./AlertModal";
import Trade from "../pages/Trade/Trade"

export default function TradeButton(props) {
  const [showAlert, setShowAlert] = useState(false);
  const [modalContent, setModalContent] = useState({
    heading: "TRADE COMPLETE!",
    message: `Check your deck to see your new card!`,
  });

  const handleCloseAlert = () => {
    window.location.reload()
    setShowAlert(false);
  };

  const handleTrade = (user1, card1, user2, card2, offerId) => {
    tradeAPI.completeTrade(user1, card1, user2, card2);
    tradeAPI.deleteOneTradeOffer(offerId);

    setShowAlert(true);
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
        className="fs-1 home-btn-cstm rounded p-1 complete-trade-btn"
      >
        COMPLETE TRADE
      </button>
      <AlertModal
        heading={modalContent.heading}
        message={modalContent.message}
        updateContent={setModalContent}
        show={showAlert}
        handleClose={handleCloseAlert}
      />
    </>
  );
}
