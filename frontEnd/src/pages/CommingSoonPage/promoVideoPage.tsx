import React, { useState, useRef } from "react";
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import screenfull from 'screenfull'
import Fade from '@material-ui/core/Fade';
import demoVideo from "../../LogoImgSrc/promoVideo.mp4";


const useStyles = makeStyles({
    player: {
        position:'fixed',
        padding:0,
        margin:0,
        top:0,
        left:0,
    },
});

//TODO Sijian Trim the Promo Page
export function PromoVideoPage() {
    const history = useHistory();
    const classes = useStyles();
    const playerRef = useRef<any>(null);
    const [checked,] = useState(true);

    const handleClickFullscreen = () => {
        if (screenfull.isEnabled) {
          screenfull.request(playerRef.current?.wrapper);
        }
      };

    return (
        <Fade in={checked} timeout={1300}>
            <ReactPlayer
                width='100%'
                height='100%'
                controls
                className={classes.player}
                playing={true}
                url={demoVideo}
                onEnded={() => { history.push('/') }}
                onPlay={handleClickFullscreen}
                ref={playerRef}
            />
        </Fade>
    )
}

