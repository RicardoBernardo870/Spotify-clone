import React, {useEffect, useState} from 'react';
import Login from './Components/Login/Login';
import Player from './Components/Player/Player';
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue} from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

   
  useEffect(() => {
    const hash = getTokenFromUrl();
    
    window.location.hash = '';
    const _token = hash.access_token;
    
    if (_token) {
      setToken(_token);
      

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
    }
    
   }, [])

   console.log(user)

  return (
    <div className="App">

    {
      token ? 
      <Player/>
            : 
      <Login/>
    }
      
    </div>
  );
}

export default App;
