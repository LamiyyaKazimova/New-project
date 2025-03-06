import React from 'react'; 
import "./index.scss"
import { useNavigate } from 'react-router-dom';
function Pages() {
  const navigate=useNavigate()
  function handleFunction(){
    navigate('/Managment')
  }

  function handleRegister(){
    navigate('/Register')
  }
  return (
   <div className='common'>
     <div className='site'>
      <img className='image' src="/img/managment.png" alt="managment" />
    <button onClick={handleFunction} className='login'>Login</button>
    <button onClick={handleRegister} className='register'>Register</button>
</div>
   </div>
  );
}

export default Pages;  
