import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import './Icons.css'

function Icons() {
    return (
        <div className="icons">
            <FavoriteBorderIcon className="favourite" />
            <AspectRatioIcon className="expand" />
        </div>
    )
}

export default Icons;
