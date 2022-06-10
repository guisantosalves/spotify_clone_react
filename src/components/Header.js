import React from "react";
import "./css/Header.css"
import Search from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";

function Header({spotify}){
    return(
        <div className="header">
            <div className="header__left">
                <Search />
                <input 
                    placeholder="Search for artists, Songs or podcasts"
                    type="text"
                />
            </div>  

            <div className="header__right">
                <Avatar src="" alt="RQ"/>
                <h4>Gandalf Bruxao</h4>
            </div>
        </div>
    )
}

export default Header;