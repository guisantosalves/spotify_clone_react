import React from "react";
import "./css/SongRow.css";

function SongRow({ tracks }) {
  return (
    <div className="songRow">
      <img className="songRow__album" src={tracks.album.images[0].url} alt="" />

      <div className="songRow__info">
        <h1>{tracks?.name}</h1>

        <p>
          {tracks.artists.map((artist) => artist.name).join(", ")}
          {tracks.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
