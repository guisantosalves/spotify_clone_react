import React from "react";
import "./css/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";

function Player({ spotify }) {
  return (
    <div className="Player">
      <div className="player__body">

        <Sidebar />
        <Body />
        
      </div>

      {/* footer */}
    </div>
  );
}

export default Player;
