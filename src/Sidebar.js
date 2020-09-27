import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import ReorderSharpIcon from '@material-ui/icons/ReorderSharp';
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import "./Sidebar.css";
import logo from './imgs/logo.png';




function Sidebar() {
    return (
        <div className="Sidebar">
            <img src={logo} alt="logo" className="Sidebar-logo"></img>
            <div className="Sidebar-elements">
                <ul className="Sidebar-main-menu">
                    <li className="Sidebar-home">
                        <HomeOutlinedIcon className="home"/>
                        <p className="item">Home</p>
                    </li>
                    <li className="Sidebar-search">
                        <SearchSharpIcon className="search"/>
                        <p className="item">Search</p>
                    </li>
                    <li className="Sidebar-libary">
                        <ReorderSharpIcon className="libary"/>
                        <p className="item">Your Libary</p>
                    </li>
                </ul>
                <ul className="Sidebar-playlists">
                    <li className="title">
                        <p>PLAYLISTS</p>
                    </li>
                    <li>
                        <AddBoxSharpIcon fontSize="large" style={{ fill: '#cacaca' }}/>
                        <p className="item">Add Playlist</p>
                    </li>
                    <li>
                        <FavoriteSharpIcon fontSize="large" style={{ fill: '#cacaca' }}/>
                        <p className="item">Liked Songs</p>
                    </li>
                </ul>
            </div>
            {/*Home*/}
            {/*Search*/}
            {/*Libary*/}
            {/*Playlists*/}
        </div>
    )
}

export default Sidebar;