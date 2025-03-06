import React from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import Icon from '../Svg';

function Register({ state, setState }) {
  const navigate = useNavigate();

  function handleRegister(e) {
    const { name, value } = e.target;
    setState(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function forgotFunction() {
    navigate('/Password');
  }

  return (
    <div className='register'>
      <div className="register-border">
        <Icon/>
        <h2>Hello! Register to get started</h2>
        <input 
          onChange={handleRegister} 
          value={state.username} 
          type="text" 
          placeholder="Username" 
          name="username" 
        />
        <input 
          onChange={handleRegister} 
          value={state.email} 
          type="email" 
          placeholder="Email" 
          name="email" 
        />
        <input 
          onChange={handleRegister} 
          value={state.password} 
          type="password" 
          placeholder="Password" 
          name="password" 
        />
        <input 
          onChange={handleRegister} 
          value={state.confirmPassword} 
          type="password" 
          placeholder="Confirm Password" 
          name="confirmPassword" 
        />
        <p onClick={forgotFunction}>Forgot Password</p>
        <button className="login-button">Register</button>
      </div>
    </div>
  );
}

export default Register;
