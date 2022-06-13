export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

// const redirectUri = "https://spotify-clone-aa5b0.web.app";

const clientID = "1d1b1a79b7ec4e4eacba2b15517a07b0";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//get everythin in front of #
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item)=>{
        
        var parts = item.split("=")

        
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;

    }, {})
} 

//we need build this URL to catch the token of spotify
export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;