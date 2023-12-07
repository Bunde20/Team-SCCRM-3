import React from "react";
import userAPI from "../utils/userAPI";
import CoinIcon from "../components/CoinIcon";

export default function PurchaseBtn(props) {
  const handlePurchase = (userId, cardId, userCoins, coinCost, setUserCoins) => {
    const newCoinTotal = userCoins - coinCost;
    console.log(newCoinTotal)
    userAPI.addUserCard(userId, cardId);
    userAPI.updateUserCoins(userId, newCoinTotal);
    setUserCoins(newCoinTotal)
  };

  return (
    <div className="button-container">
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
  );
}
