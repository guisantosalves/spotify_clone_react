import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";

//spotify stuff
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";


const spotify = new SpotifyWebApi();

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
      spotify.setAccessToken(_token);

      spotify.getMe().then((user)=>{
        console.log(user)
      })
    }
  }, []);

  return <div className="App">{token ? <Player/> : <Login />}</div>;
}

export default App;
