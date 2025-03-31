import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { handleGetRegister } from "./services/services";
import { useForm } from 'react-hook-form';
import Icon from "../Svg";

function Managment() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
  });

  const { data: datas } = useQuery({
    queryKey: ["users"],
    queryFn: () => handleGetRegister().then((prev) => prev.data),
  });

  const navigate = useNavigate();

  function forgotFunction() {
    navigate('/Password');
  }


  function onSubmit(data) {
    if (!datas) return;

    const submitEmail = data.email.trim() ? data.email.trim() : null;
    const submitPassword = data.password ? data.password : null;

    if (submitEmail && submitPassword) {
      const user = datas.find((user) => submitEmail === user.email);
      if (user && submitPassword === user.password) {
        localStorage.setItem("token", JSON.stringify("123"));
        navigate('/home');
        reset();
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login">
        <div className="login-border">
          <Icon />
          <h2>Welcome Back! Glad to see you again!</h2>

          <input
            {...register("email", {
              required: "Bos saheni doldurun",
              validate: {
                trueEmail: (value) => {
                  const userEmail=datas.find((user)=>user.email===value)
                  if (!userEmail) {
                    return "Emaili dogru daxil edin!";
                  }
                  return true; 
                }
              }
            })}
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

      
          <input
            {...register("password", {
              required: "Bos saheni doldurun!",
              validate: {
                truePassword: (value) => {
                const userPassword=datas.find((user)=>user.password===value)
                  if (!userPassword) {
                    return "Passwordu dogru daxil edin!"; 
                  }
                  return true;
                }
              }
            })}
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          {errors.password && <p  className="error">{errors.password.message}</p>}
          <p onClick={forgotFunction}>Forgot Password</p>
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default Managment;
