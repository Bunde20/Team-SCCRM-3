import React from "react";
import CoinIcon from "./CoinIcon";

export default function PurchaseBtn({ creature, userCoins, handlePurchase }) {
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
