import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { handleGetRegister } from "./services/services";
import Icon from "../Svg";

function Managment() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function forgotfunction() {
    navigate("/Password");
  }


  const { data, error,refetch} = useQuery({
    queryKey: ["users"],
    queryFn: () => handleGetRegister(email, password),  
  });
console.log("data:",data);




  function handlesubmit() {

    if (data) {
      navigate("/Register");
    } 


    if (error) {
      alert("Xəta baş verdi: ")
      return;
    }

  }

  return (
    <div className="login">
      <div className="login-border">
        <Icon />
        <h2>Welcome Back! Glad to see you again!</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />
        <p onClick={forgotfunction}>Forgot Password</p>
        <button onClick={handlesubmit} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
}

export default Managment;
