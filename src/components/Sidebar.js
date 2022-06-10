import React from "react";
import "./css/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt="spotify icon"
      />
      <SidebarOption title="Home" Icon={HomeIcon}/>
      <SidebarOption title="Search" Icon={SearchIcon}/>
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
      
      <br/>
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr/>

      <SidebarOption title="Hip hop" />
      <SidebarOption title="Rock" />
      <SidebarOption title="Rnb" />
    </div>
  );
}

export default Sidebar;
