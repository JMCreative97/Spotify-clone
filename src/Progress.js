import React from 'react';
import './Progress.css';

function Progress() {
    return (
        <div className="progress">
            <p className="remaining_time">0:00</p>
            <div className="bar"></div>
            <p className="end_time">0:00</p>
        </div>
    )
}

export default Progress;
