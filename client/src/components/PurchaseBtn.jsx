import React from "react";

export default function PurchaseBtn({ creature, userCoins, handlePurchase }) {
  return (
    <div className="button-container">
      {userCoins >= creature.coinCost && (
        <button
          className="rounded purchase-button"
          onClick={() => handlePurchase(creature.coinCost, creature.name)}
        >
          Purchase for {creature.coinCost} coins
        </button>
      )}
    </div>
  );
}
