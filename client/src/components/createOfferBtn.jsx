import React, { useState, useEffect } from "react";
import CreateOfferModal from "./createOfferModal";

export default function CreateOfferBtn(props) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="button-container">
        <button className="rounded purchase-button mb-2" onClick={handleClick}>
          Offer Trade
        </button>
      </div>
      <CreateOfferModal
        show={showModal}
        offeredCreature={props.offeredCreature}
        handleClose={handleClose}
      />
    </>
  );
}
