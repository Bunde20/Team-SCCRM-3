import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function LogModal({ onClose, onLogin, onSignup }) {
  const [showLoginModal, setShow] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')

  const handleClose = () => setShow(false);
  const handleSignUpClose = () => {
    setShowSignupModal(false);
    setShow(false);
  }
  const handleShow = () => setShow(true);
  const handleShowSignup = () => setShowSignupModal(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
  
    onLogin(username, password);

    // Close the modal
    handleClose();
    // console.log('login successful')
  };
  const handleSignUpClick = () => {
    onSignup(username, password, email);
    handleSignUpClose();
    handleClose();
  }

  return (
    <>
      <Button variant="secondary" className='col-10 col-md-7 my-5 home-btn-cstm rounded p-1' onClick={handleShow}>
        Login
      </Button>

      <Modal show={showLoginModal} onHide={handleClose}>
        <Modal.Header>
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
          <Button variant="success" onClick={handleShowSignup}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
      {/* signUpModal */}
      <Modal show={showSignupModal} onHide={handleSignUpClose}>
      <Modal.Header>
          <Modal.Title>Create A New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="SignUpForm.Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="CatchEmAll@gmail.com"
                value={email}
                onChange={handleEmailChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="SignUpForm.Username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="CatchEmAll1123"
                value={username}
                onChange={handleUsernameChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="SignUpForm.Password">
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
          <Button variant="secondary" onClick={handleSignUpClose}>
            Close
          </Button>
    
          <Button variant="success" onClick={handleSignUpClick}>
            Sign Up
          </Button>
        </Modal.Footer>
        </Modal>
    </>
  );
}

export default LogModal;
