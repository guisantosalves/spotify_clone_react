import React from "react";
import "./css/Body.css";
import Header from "./Header";
import {useDataLayerValue} from "../DataLayer"
import { PlayCircleFilled } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import SongRow from "./SongRow";

function Body({ spotify }) {
  
  const [{discover_weekly}, dispatch] = useDataLayerValue();
  console.log(discover_weekly)
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          src={discover_weekly?.images[0].url}
          alt="spotify image exemple"
        />
        <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilled className="body__shuffle"/>
            <Favorite fontSize="large"/>
            <MoreHoriz />
          </div>

        {/* list of songs */}
        {discover_weekly?.tracks.items.map((item, index)=>(
            <SongRow tracks={item.track}/>
        ))}
      </div>
    </div>
  );
}

export default Body;
