import React from "react";
import Navbar from "./Navbar";
import Navigation from "./Navbutton";
import logo from "../assets/icons/logo.png";
import { LogReg } from "./styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const GotoHome = () => {
    navigate("/");
  };
  return (
    <LogReg>
      <div className="topnav">
        <div className="navlogin">
          <div onClick={GotoHome} className="left">
            <img src={logo} alt="" />
          </div>
          <div className="right">
            <span>Login</span>
          </div>
        </div>
      </div>

      <div className="formdiv">
        <div className="writeup">
          <p>Create your account</p>
          <span>Registration is easy.</span>
        </div>
        <form action="">
          <div>
            <label htmlFor="Email">Email address *</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="firstnaelastname">
            <div>
              <label htmlFor="Name">Full name *</label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label htmlFor="Name">Full name *</label>
              <input type="text" name="" id="" />
            </div>
          </div>
     
       <div className="passwordoneandtow">
          <div>
            <label htmlFor="password1">Password*</label>
            <input type="password" name="password1" id="password1" />
          </div>

          <div>
            <label htmlFor="password2">Confirm Password*</label>
            <input type="password" name="password2" id="password2" />
          </div>
          </div>
          <p  className="terms">
            By clicking Register, you agree to Organix's Terms of Use and
            Privacy Policy.
          </p>
          <div>
            <button className="btn">Register</button>
          </div>
          <p className="termss">
            Organix's may send you communications; you may change your
            preferences in your account settings. We'll never post without your
            permission.
          </p>
        </form>
      </div>
    </LogReg>
  );
};

export default Login;

// https://www.etsy.com/join
