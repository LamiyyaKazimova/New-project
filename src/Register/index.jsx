import React, { useEffect } from 'react';
import './index.scss';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../Svg';
import { random } from './randomId';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { handleGetRegister, handlePostRegister } from './servicesRegister/service';


function Register() {

  const {register,handleSubmit,formState:{errors},reset}=useForm({defaultValues:{id:"",username:"",email:"",password:"",img:""}})

//  const { data: datas } = useQuery({
//      queryKey: ["register"],
//      queryFn: () => handleGetRegister().then((prev) => prev.data),
//    });
  
   
   const {mutate}=useMutation(
    {mutationFn:(obj)=>handlePostRegister(obj),onSuccess:()=>{
      navigate('/managment')
    }}
   )
  
   
  const navigate = useNavigate();




  function forgotFunction() {
    navigate('/Password');
  }

  function onSubmit(data){
 const submitUsername=data.username.trim() 
 const submitEmail=data.email.trim()
 const submitPassword=data.password 
 const submitImg=data.img
const newData={...data,img:data.img[0].name}

 mutate(newData)
 
console.log(newData);

 reset()

  }


  
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} >
    <div className='register'>
      <div className="register-border">
        <Icon/>
        <h2>Hello! Register to get started</h2>
        <input 
          type="text" 
          placeholder="Username" 
          name="username" 
          {...register("username",{required:"Bos xanani doldurun!",})}
          // style={{borderColor:error.username ? "red" : "black"}}
          // onBlur={(e)=>{e.target.style.borderColor=e.target.value ? "black" : "red" }}
        />
        {errors.username && <p className='error'>{errors.username.message}</p>}
        <input 
          // onChange={handleRegister} 
          // value={state.email} 
          type="email" 
          placeholder="Email" 
          name="email" 
          {...register("email",{required:"Bos xanani doldurun!"})}
          
          // style={{borderColor:error.email ? "red" : "black"}}
          // onBlur={(e)=>{e.target.style.borderColor=e.target.value ? "black" : "red" }}
          
        />
        {errors.email && <p className='error'>{errors.email.message}</p>}
        <input 
          type="password" 
          placeholder="Password" 
          {...register("password",{required:"Bos xanani doldurun!"})}
          // style={{borderColor:error.password ? "red" : "black"}}
          // onBlur={(e)=>{e.target.style.borderColor=e.target.value ? "black" : "red" }}
        />
        {errors.password && <p className='error'>{errors.password.message}</p>}
        <input  type="file" accept='image/*'
         {...register("img",{required:true})}
        // style={{borderColor:error.img ? "red" : "black"}}
        // onBlur={(e)=>{e.target.style.borderColor=e.target.value ? "black" : "red" }}
        />
        {errors.img && <p className='error'>{errors.img.message}</p>}
        <p onClick={forgotFunction}>Forgot Password</p>
        <button type='submit' className="login-button">Register</button>
      </div>
    </div>
 
    </form>
    </>
  );
}

export default Register;
