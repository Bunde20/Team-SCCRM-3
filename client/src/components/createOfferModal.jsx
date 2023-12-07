import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "../components/Card";
import SeekCardBtn from "./SeekCardBtn";

import cardAPI from "../utils/cardAPI";

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
        <Modal.Header>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message}
          <div className="d-flex flex-wrap justify-content-center">
            {cards.map((creature) => (
              <div>
                <Card creature={creature} key={creature._id} />
                <SeekCardBtn
                  creature={creature}
                  offeredCreature={offeredCreature}
                  handleClose={handleClose}
                />
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
