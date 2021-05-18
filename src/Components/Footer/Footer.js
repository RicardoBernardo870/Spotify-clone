import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPreviousRounded'
import SkipNextIcon from '@material-ui/icons/SkipNextSharp'
import ShuffleIcon from '@material-ui/icons/ShuffleRounded'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import Slider from '@material-ui/core/Slider/Slider'

function Footer() {
    return (
        <div className='footer'>
         <div className='footer__left'>
         <img 
         className='footer__albumLogo'
         src='https://upload.wikimedia.org/wikipedia/pt/d/da/Black_Sabbath_debut_album.jpg' 
         alt='Album' 
         />
         <div className='footer__songInfo'>
             <h4>Black Sabbath</h4>
             <p>Black Sabbath</p>
         </div>

         </div>
         <div className='footer__center'>
         <ShuffleIcon className='footer__green' />
         <SkipPreviousIcon className='footer__icon' />
         <PlayCircleOutlineIcon className='footer__icon' fontSize='large' />
         <SkipNextIcon className='footer__icon' />
         <RepeatIcon className='footer__green' />

         </div>
         <div className='footer__right'>
         <Grid container spacing={2}>
             <Grid item>
             <PlaylistPlayIcon />
             </Grid>
             <Grid item>
                 <VolumeDownIcon />
             </Grid>
             <Grid item xs>
                 <Slider/>
             </Grid>
         </Grid>

         </div>
            
        </div>
    )
}

export default Footer
