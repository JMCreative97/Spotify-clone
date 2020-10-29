import React from 'react';
import CurrentSong from './CurrentSong';
import Icons from './Icons';
import Controls from './Controls';
import VolumeControls from './VolumeControls';

import './BottomBar.css';

function BottomBar() {
    return (
        <div className="BottomBar">

          <CurrentSong className="currentsong"/>  
          <Icons className="icons"/>  
          <Controls className="controls"/>
          <VolumeControls className="volume_controls"/>
            {/* Song Info
            
            
            Buttons */}
        </div>
    )
}

export default BottomBar;
