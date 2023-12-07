import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AlertModal({
  heading = "Uh oh!",
  message = "Something went wrong. Try Again!",
  updateContent,
  show,
  handleClose,
  onClose = () => {},
}) {
  return (
    <>
      <Modal className="text-center" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlertModal;
