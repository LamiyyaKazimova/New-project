import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
  
  
 export function Home() {
 const location=useLocation()
 console.log(location);
 
  const navigate=useNavigate()
   function backUp(){
   localStorage.removeItem("token")
   navigate('/')
   }
    return (
      <>
      home

      <div>
        <button onClick={backUp}>Geri</button>
      </div>
      </>
    );
  }
  
  
  