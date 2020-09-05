import React from "react";
import SignUp from "../components/signup/SignUp";
import { ToastContainer } from "react-toastify";

import "./auth-page.scss";

const AuthPage = () => {
  return (
    <div className='auth-card'>
      <ToastContainer />
      <SignUp />
    </div>
  );
};

export default AuthPage;
