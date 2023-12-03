import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function LogModal({ onClose, onLogin }) {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    // Call your onLogin function with the entered username and password
    onLogin(username, password);

    // Close the modal
    handleClose();
    // console.log('login successful')
  };

  return (
    <>
      <Button variant="secondary" className='col-10 btn my-5' onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Programon Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="LoginForm.Username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="CatchEmAll1123"
                value={username}
                onChange={handleUsernameChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="LoginForm.Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password123"
                value={password}
                onChange={handlePasswordChange}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLoginClick}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogModal;
