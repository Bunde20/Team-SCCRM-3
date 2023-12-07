import React from 'react';
import Button from 'react-bootstrap/Button';

const LogOutBtn = ({onLogout}) => {
    const buttonStyle = {
        position: 'absolute',
        top: '10px', 
        left: '10px', 
      };
  return (
    <Button variant="danger" onClick={onLogout} style={buttonStyle}>Logout</Button>
  );
};

export default LogOutBtn;
