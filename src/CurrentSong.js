import React from 'react';
import logo from './imgs/songicon.png';
import './CurrentSong.css';

function CurrentSong() {
    return (
        <div className="CurrentSong">
            <img src={logo} alt="songicon" className="songicon"/>
            <div className="songinfo">
                <p className="songtitle">Work</p>
                <p className="songdescription">Chris Lorenzo, Puppah Nas-T, Denise</p>
            </div>
            
            
        </div>
    )
}

export default CurrentSong;
