import React from "react";
import "./css/Login.css";
import { loginUrl, getTokenFromUrl } from "../spotify";

function Login() { 

  return (
    <div className="login">
      <h1>login page</h1>
      {/* spotifu Logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />

      {/* Login with spotify button */}
      <a href={loginUrl}>Login with spotify</a>
    </div>
  );
}

export default Login;
