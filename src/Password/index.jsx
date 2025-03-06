import React from 'react'
import "./index.scss"
import { useNavigate } from 'react-router-dom';
function ChangePassword(){
const navigate=useNavigate()
  return (
    <div className='password'>
    <div className="passwordd">
    <svg onClick={()=>navigate(-1)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
     <input type="password" placeholder='Enter your password' />
     <input type="password" placeholder=' Enter your new password'/>
     <button>Change Password</button>
    </div>

    </div>
  )
}

export default ChangePassword ;