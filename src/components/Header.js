import React from "react";
import "./css/Header.css"
import Search from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import {useDataLayerValue} from "../DataLayer"

function Header({spotify}){

    const [{user}, dispatch] = useDataLayerValue();

    console.log(user)
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
                <Avatar src={user?.images[0].url} alt="my avatar"/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;