import React from 'react';
import Button from 'react-bootstrap/Button';

const LogOutBtn = ({onLogout}) => {
  return (
    <Button onClick={onLogout} className={'col-10 col-md-7 my-4 continue-btn-cstm p-1'} >Logout</Button>
  );
};


export default LogOutBtn;
