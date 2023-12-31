import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "../../../Card";
import SeekCardBtn from "../../SeekCardBtn";
import "./style.css";

import cardAPI from "../../../../utils/cardAPI";
import GoBack from "../CreateOfferModalBtn";

export default function CreateOfferModal({
  heading = "SEEKING",
  message = "Select the card you'd like in return.",
  show,
  handleClose,
  onClose = () => {},
  offeredCreature,
}) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    cardAPI.getAllCards().then((res) => setCards(res.data));
  }, []);

  return (
    <>
      <Modal className="text-center" size="xl" show={show} onHide={handleClose}>
        <Modal.Header className="seeking-header">
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="seeking-container">
          {message}
          <div className="d-flex flex-wrap justify-content-center ">
            {cards.map((creature, index) => (
              <div key={index}>
                <Card creature={creature} key={creature._id} />
                <SeekCardBtn
                  creature={creature}
                  offeredCreature={offeredCreature}
                  handleClose={handleClose}

                />
              </div>
            ))}
          </div>
          <GoBack />
        </Modal.Body>
      </Modal>
    </>
  );
}
