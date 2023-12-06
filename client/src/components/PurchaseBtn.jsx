import React from "react";
import CoinIcon from "./CoinIcon";
import userAPI from "../utils/userAPI";

export default function PurchaseBtn(props) {
  const handlePurchase = (userId, cardId) => {
    userAPI.addUserCard(userId, cardId);
  };

  return (
    <div className="button-container mb-2">
      {userCoins >= creature.coinCost && (
        <button
          className="rounded purchase-button"
          onClick={() => handlePurchase(creature.coinCost, creature.name)}
        >
          Purchase for {creature.coinCost} <CoinIcon />
        </button>
      )}
    </div>
  );
}
