import React, { useState } from "react";
import GoogleLogin from "react-google-login";

import "./social.scss";

const GoogleAuth = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");

  const responseGoogle = (response) => {
    console.log(response);
  };

  let googleContent;

  if (isLoggedIn) {
    googleContent = (
      <div className='social google-loggedin'>
        <img src={picture} alt={name} />
        <h4>{name}</h4>
      </div>
    );
  } else {
    googleContent = (
      <div className='social google-button'>
        <GoogleLogin
          clientId='949720192708-fobp673j9u69bv2egdq2cekojqbob160.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }

  return <div>{googleContent}</div>;
};

export default GoogleAuth;
