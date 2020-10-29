import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import ReorderSharpIcon from '@material-ui/icons/ReorderSharp';
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import "./Sidebar.css";
import logo from './imgs/logo.png';
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {

    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="Sidebar">
            <img src={logo} alt="logo" className="Sidebar-logo"></img>
            <div className="Sidebar-elements">

                <SidebarOption Icon={HomeOutlinedIcon} title="Home"/>
                <SidebarOption Icon={SearchSharpIcon} title="Search"/>
                <SidebarOption Icon={ReorderSharpIcon} title="Your Libary"/>

                <br/>
                <p className="titlePlaylist"><b>PLAYLISTS</b></p>
                <hr/>
                <br/>

                {playlists?.items?.map(playlist => (
                    <SidebarOption title={playlist.name}/>
                ))}

                <SidebarOption title="Rock"></SidebarOption>
                <SidebarOption title="RnB"></SidebarOption>
                <SidebarOption title="Pop"></SidebarOption>

{/* 
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
                </ul> */}
            </div>
            {/*Home*/}
            {/*Search*/}
            {/*Libary*/}
            {/*Playlists*/}
        </div>
    )
}

export default Sidebar;