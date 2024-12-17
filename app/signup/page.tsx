'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {
  faUser,
  faChevronLeft,
  faEdit,
  faCamera,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

import "@/styles/SignupPage.css";
const SignupPage = () => {
  return (
    <div className="loginContainer">
      {/* Left Section */}
      <div className="loginLeft">
        <div className="logocontainer">
          <div className="logo">
            <img src="/images/logoPro.png" alt="Logo" className="logImg" />
          </div>
           {/* Back to Settings Link */}
           <div className="backContainer">
           <Link href={"/login"} className="BackHome">
            <FontAwesomeIcon icon={faChevronLeft} className="Hicon" />
            <span>Login</span>
          </Link>
           </div>
         
        </div>
        <div className="loginText">
          <h1 className="welcometext">Welcome signUp!</h1>
          <p className="subtext">Log in to access your dashboard</p>
        </div>
       
      
        {/* Login Form */}
        <form className="loginform">
          <input
            type="email"
            placeholder="Email Address"
            className="inputfield"
          />
          <input
            type="password"
            placeholder="Password"
            className="inputfield"
          />
          
            <Link href="/dashboard" className="loginbutton">
            Sign Up
          </Link>
         
        </form>

        <div className="orcontainer">
          <span>OR</span>
        </div>
        <div className="googleContainer">
  <Link href="/dashboard" className="googlebutton">
  <FontAwesomeIcon icon={faGoogle} className="googleicon" />

    <span>Sign up with Google</span>
  </Link>
</div>

    
       
      </div>

   
    </div>
  );
};

export default SignupPage;
