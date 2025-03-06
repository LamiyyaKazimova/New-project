import Password from '../ForgotPassword';
import Managment from '../Login';
import Pages from '../Pages';
import { Routes, Route } from 'react-router-dom';
import Register from '../Register';
import ChangePassword from '../Password';
import React, { useState } from 'react'

const initialValue={
  username:"",
  email:"",
  password:"",
  confirmPassword:""
  }
function Routers(){
  const[state,setState]=useState(initialValue)
    return(
        <Routes>
        <Route path="/" element={<Pages />}  />
        <Route path="/managment" element={<Managment />}/>   
        <Route path="/password" element={<Password/>} />
        <Route path="/register" element={<Register state={state} setState={setState}/>} />
        <Route path="/changepassword" element={<ChangePassword/>} /> 
      </Routes>
    )
}

export default Routers;