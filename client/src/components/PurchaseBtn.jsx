import React, { useState, useEffect } from "react";
import userAPI from "../utils/userAPI";
import CoinIcon from "../components/CoinIcon";
import AlertModal from "./AlertModal";

export default function PurchaseBtn(props) {

  const [showAlert, setShowAlert] = useState(false);
  const [modalContent, setModalContent] = useState({
    heading: "NEW CARD!",
    message: `You got a ${props.creature.name}!`,
  });

  const handleCloseAlert = () => setShowAlert(false);

  const handlePurchase = (
    userId,
    cardId,
    userCoins,
    coinCost,
    setUserCoins
  ) => {
    const newCoinTotal = userCoins - coinCost;
    console.log(newCoinTotal);
    userAPI.addUserCard(userId, cardId);
    userAPI.updateUserCoins(userId, newCoinTotal);
    setUserCoins(newCoinTotal);
    setShowAlert(true)
  };

  return (
    <>
      <div className="button-container mb-2">
        <button
          className="rounded purchase-button"
          onClick={() =>
            handlePurchase(
              props.currentUser._id,
              props.creature._id,
              props.userCoins,
              props.creature.coinCost,
              props.setUserCoins
            )
          }
        >
          Purchase for {props.creature.coinCost} coins <CoinIcon />
        </button>
      </div>
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
