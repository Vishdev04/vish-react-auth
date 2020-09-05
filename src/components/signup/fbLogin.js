import React, { useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FaFacebookF, FaFacebook } from "react-icons/fa";

import "./social.scss";

const FBlogin = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    setLoggedIn(true);
    setUserID(response.userID);
    setName(response.name);
    setEmail(response.email);
    setPicture(response.picture.data.url);
  };

  const componentClicked = () => console.log("clicked");

  let fbContent;

  if (isLoggedIn) {
    fbContent = (
      <div className='social fb-loggedin'>
        <img src={picture} alt={name} />
        <h4>{name}</h4>
      </div>
    );
  } else {
    fbContent = (
      <FacebookLogin
        appId='671224953508282'
        autoLoad={true}
        fields='name,email,picture'
        callback={responseFacebook}
        render={(renderProps) => (
          <div onClick={renderProps.onClick} className='social fb-button'>
            <FaFacebookF />
            <button>FB Login</button>
          </div>
        )}
      />
    );
  }

  return <div>{fbContent}</div>;
};

export default FBlogin;
