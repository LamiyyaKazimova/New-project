import React from 'react'
import "./index.scss"
import { useNavigate } from 'react-router-dom';
import { useQuery,useMutation } from "@tanstack/react-query";
import { useForm } from 'react-hook-form';
import { handleNewPassword, handlePassword } from './services';
function ChangePassword(){
const navigate=useNavigate()
const {register,handleSubmit,formState:{errors},reset}=useForm({defaultValues:{newpassword:""}})

const { data: datas } = useQuery({
    queryKey: ["users"],
    queryFn: () => handlePassword().then((prev) => prev.data),
  });

  const {mutate}=useMutation(
    {mutationFn:(obj)=>handleNewPassword(obj),onSuccess:()=>{
        // navigate("/Register")  
    }}
   )

  const onSubmit=(data)=>{
  // console.log(data);

  if(datas.password===data.newpassword){
    alert("eyni sifre ola bilmez!")
    return;
  }
  mutate({newpassword:data.newpassword})
  reset()
  
  }
 
  return (
   <form onSubmit={handleSubmit(onSubmit)}>
     <div className='password'>
    <div className="passwordd">
    <svg onClick={()=>navigate(-1)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
     <input type="password" placeholder='Enter new your password'
     {...register("newpassword",{required:"Bos saheni doldurun!"})}
     />
     {errors.newpassword && <p>{errors.newpassword.message}</p>}
     <button type='submit'>Change Password</button>
    </div>

    </div>
   </form>
  )
}

export default ChangePassword ;