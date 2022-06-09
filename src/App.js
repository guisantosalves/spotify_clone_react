import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);
  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl(); // get the hash
    window.location.hash = ""; // remove hash from the url

    const _token = hash.access_token;

    //get the token from url after that clean the url
    if (_token) {
      setToken(_token);
    }
  }, []);

  return <div className="App">{token ? <h1>I am login</h1> : <Login />}</div>;
}

export default App;
