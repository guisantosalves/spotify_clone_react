import React from "react";
import "./css/Footer.css";
import { PlayCircleOutline } from "@mui/icons-material";
import { SkipPrevious } from "@mui/icons-material";
import { SkipNext } from "@mui/icons-material";
import { Shuffle } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { PlaylistPlay } from "@mui/icons-material";
import { VolumeDown } from "@mui/icons-material";
import { Slider } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img 
            className="footer__albumLogo"
            src="https://icon-library.com/images/disturbed-icon/disturbed-icon-11.jpg" 
            alt="disturbed icon"
        />
        
        <div className="footer__songInfo">
            <h4>Disturbed</h4>
            <p>Down with the sickness</p>
        </div>
      </div>

      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
            <Grid item>
                <PlaylistPlay />
            </Grid>
            
            <Grid item>
                <VolumeDown />
            </Grid>

            <Grid item xs={8}>
                <Slider />
            </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
