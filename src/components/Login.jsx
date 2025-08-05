import React from "react";
import Navbar from "./Navbar";
import Navigation from "./Navbutton";
import logo from '../assets/icons/logo.png'

const Login = () => {
  return (
    <div>
        <div className="navlogin">
          <div><img src={logo} alt="" /></div>
          <div>
            <span>Login</span>
          </div>
        </div>

      <div className="">
        <p>Create your account</p>
        <span>Registration is easy.</span>
        <form action="">
          <div>
            <label htmlFor="Email">Email address *</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="Name">Full name *</label>
            <input type="text" name="" id="" />
          </div>

          <div>
            <label htmlFor="password1">Password</label>
            <input type="password" name="password1" id="password1" />
          </div>

          <div>
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" name="password2" id="password2" />
          </div>
          <p>By clicking Register, you agree to Organix's Terms of Use and Privacy Policy.</p>
          <div>
         <button>Register</button>
          </div>
          <p>Organix's may send you communications; you may change your preferences in your account settings. We'll never post without your permission.</p>
          </form>
      </div>
    </div>
  );
};

export default Login;




// https://www.etsy.com/join