import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
function Pages() {
  const navigate = useNavigate();
  function handleFunction() {
    navigate("/Managment");
  }

  function handleRegister() {
    navigate("/Register");
  }
  return (
    <div className="common">
      <div className="site">
        <img src="/img/img1.png" alt="flowers" />
        <button onClick={handleFunction} className="login">
          Login
        </button>
        <button onClick={handleRegister} className="register">
          Register
        </button>
      </div>
    </div>
  );
}

export default Pages;
