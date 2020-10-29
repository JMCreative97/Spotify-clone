import React, { Component, useEffect, useState  } from 'react';
import './App.css';
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';
import {useDataLayerValue}from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';
import {getTokenFromUrl} from './Spotify';
const spotifyApi = new SpotifyWebApi();


export default function App(){
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token){

      dispatch({
        type:'SET_TOKEN',
        token: _token
      })

      spotifyApi.setAccessToken(_token);
      spotifyApi.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });

      spotifyApi.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlists
        })
      });
    }
    console.log('I HAVE TOKEN ', token);
  }, []);

    console.log(' USER ', user);


      return (

      <div className="App">
        { token ? (
            <div className="main">
              <Sidebar/>
              <Header/>  
              <BottomBar/>
              {/*//{}Conten*/}
            </div>
          ) : (
            <Login/>
          ) 
        }
      </div>
      );
 }


