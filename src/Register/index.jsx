import React from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';

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
    <div className='login'>
      <div className="register">
        <svg onClick={() => navigate(-1)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
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
