import React, {useEffect} from 'react';
import Login from './Components/Login/Login';
import Player from './Components/Player/Player';
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue} from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ token, items }, dispatch] = useDataLayerValue();

   
  
  useEffect(() => {
    const hash = getTokenFromUrl();
   
    
    window.location.hash = '';
    const token = hash.access_token;
    
    if (token) {
      dispatch({
        type: "SET_TOKEN",
        token: token,
      })
      
      

      spotify.setAccessToken(token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });
    
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type:'SET_PLAYLISTS',
          playlists: playlists,
          items: playlists.items[0].id,
        })
      });

      spotify.getPlaylist('0G16J4pinbEO31hi6kk5mJ').then(response => {
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])


  return (
    <div className="App">

    {
      token ? 
      <Player spotify={spotify}/>
            : 
      <Login/>
    }
      
    </div>
  );
}

export default App;
