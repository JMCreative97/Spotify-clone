import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import {loginUrl} from './Spotify';

export default function Login () {

return (
    <div className="Login">
        <a href={loginUrl}> Login to Spotify </a>
    </div>
);
}

