import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";

//context api and reducer
import { useDataLayerValue } from "./DataLayer";

//spotify stuff
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  
  //run code based on a given condition
  useEffect(() => {

    const hash = getTokenFromUrl(); // get the hash
    window.location.hash = ""; // remove hash from the url

    const _token = hash.access_token;

    //get the token from url after that clean the url
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlist,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcRuQcB6ePHgQ').then((discover_weekly)=>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: discover_weekly,
        })

      })
    }
  }, []);

  console.log("here your user from datalayer: ", user);
  console.log("here your token from datalayer: ", token);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
