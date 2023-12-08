import React from 'react';
import Button from 'react-bootstrap/Button';

const LogOutBtn = ({onLogout}) => {
    // const buttonStyle = {
    //     position: 'absolute',
    //     top: '10px', 
    //     left: '10px', 
    // className='continue-btn-cstm'
    //   };
  return (
    <Button variant="danger" onClick={onLogout} className={'flex continue-btn-cstm'} >Logout</Button>
  );
};


export default LogOutBtn;
