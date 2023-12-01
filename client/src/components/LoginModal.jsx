import React, { useState } from 'react';

const LoginModal = ({onClose, onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
      console.log('Login button was clicked')
    
        onLogin(username, password);
        console.log(username, password)
    }

    return (
      <div className="modal" >
  <div className="modal-dialog" >
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Programon Login</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className="modal-footer">
        <button type="button" onClick={handleLogin}className="btn btn-primary">Login</button>
        <button type="button" onClick={onClose} className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    )
}
      


    
    export default LoginModal;  