import Password from '../ForgotPassword';
import Managment from '../Login';
import Pages from '../Pages';
import { Routes, Route } from 'react-router-dom';
import Register from '../Register';
import ChangePassword from '../Password';
import React, { useState } from 'react'

import { ManagmentProtector } from '../ManagmentProtector';
import { TestPage } from '../testpage/Testpage';

function Routers(){
    return(
        <Routes>
        <Route path="/" element={<Pages />}  />
        <Route path="/managment" element={<Managment />}/>   
        <Route path="/password" element={<Password/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/changepassword" element={<ChangePassword/>} /> 
        <Route element={<ManagmentProtector/>}>
        <Route path="/home" element={<TestPage/>} /> 
        </Route>
        
      </Routes>
    )
}

export default Routers;