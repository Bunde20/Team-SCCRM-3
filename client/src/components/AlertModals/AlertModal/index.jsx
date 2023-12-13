import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AlertModal({
  heading = "Uh oh!",
  message = "Something went wrong. Try Again!",
  classHeader,
  classBody,
  classFooter,
  show,
  handleClose
}) {
  return (
    <>
      <Modal className='text-center' show={show} onHide={handleClose}>
        <Modal.Header closeButton className={classHeader}>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={classBody}>{message}</Modal.Body>
        <Modal.Footer className={classFooter}>
          <Button variant="secondary" onClick={handleClose} className='paragraph-text'>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlertModal;
