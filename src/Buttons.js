import React from 'react';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import './Buttons.css';

function Buttons() {
    return (
        <div className="buttons">
            <ShuffleIcon className="shuffle"/>
            <SkipPreviousIcon className="prev"/>
            <PlayCircleOutlineIcon className="play"/>
            <SkipNextIcon className="next"/>
            <RepeatIcon className="repeat"/>
        </div>
    )
}

export default Buttons;
