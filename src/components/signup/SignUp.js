import React, { useState } from "react";
import FBlogin from "./fbLogin";
import GoogleAuth from "./googleLogin";

import "./SignUp.scss";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    console.log(`Name: ${firstName + " " + lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className='sign-up'>
      <h3 className='title'>SIGN UP</h3>

      <h2>Create Your Account</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className='social-wrapper'>
        <FBlogin />
        <GoogleAuth />
      </div>

      <span className='or-separator'>
        <hr />
        <span>or</span>
      </span>

      <div className='sign-up-form'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}>
          <input
            type='text'
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Email Address'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <p>
            By clicking Sign Up, you agree to our <a href='#'>Terms of Use</a>{" "}
            and our <a href='#'>Privacy Policy</a>
          </p>
          <button>SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
