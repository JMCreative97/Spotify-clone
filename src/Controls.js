import React from 'react';
import Buttons from './Buttons';
import Progress from './Progress';
import './Controls.css';

function Controls() {
    return (
        <div className="controls">
            <Buttons className="buttons"/>
            <Progress className="progress"/>
        </div>
    )
}

export default Controls;
