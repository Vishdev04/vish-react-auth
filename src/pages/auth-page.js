import React from "react";
import SignUp from "../components/signup/SignUp";

import "./auth-page.scss";

const AuthPage = () => {
  return (
    <div className='auth-card'>
      <SignUp />
    </div>
  );
};

export default AuthPage;
