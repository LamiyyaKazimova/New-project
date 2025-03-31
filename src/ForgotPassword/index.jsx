import React from 'react'
import "./index.scss"
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQuery } from "@tanstack/react-query";
import { handleGetForgotPassword } from './services/services';
function Password(){
const navigate=useNavigate()
const {register,handleSubmit,formState:{errors},reset}=useForm({defaultValues:{email:""},mode:{onsubmit}})

const { data: datas } = useQuery({
  queryKey: ["users"],
  queryFn: () => handleGetForgotPassword().then((prev) => prev.data),
});
function onSubmit(data){
const users=datas.find((user)=>user.email===data.email)
if(users){
navigate("/ChangePassword")
}
reset()
}

  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <div className='password'>
    <div className="passwordd">
    <svg onClick={()=>navigate(-1)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
    <input type="email" placeholder='Enter your email' 
    {...register("email",{required:"Bos xanani doldurun!",validate:{trueEmail:(value)=>{
    const userEmail=datas.find((user)=>user.email=== value)
    if(!userEmail){
    return "Dogru email daxil edin!"
    }
    return true
    }}})}
    />
    {errors.email && <p className='error'>{errors.email.message}</p>}
     <button type='submit' >Next</button>
    </div>

    </div>

   </form>
  )
}

export default Password ;

