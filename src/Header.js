import React from 'react';
import "./Header.css";
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
    return (
        <div className="Header">
            <div className="Arrows">
                <ChevronLeftOutlinedIcon className="left"/>
                <ChevronRightOutlinedIcon className="right"/>
                </div>
            <div className="Input-text">
                <SearchOutlinedIcon className="Search-icon"/>
                <input type="text" className="Header-search"></input>
            </div>
            <div className="Account">
                <AccountCircleIcon/>
                <p>JMCreative</p>
                <ArrowDropDownIcon />
            </div>
        </div>

    )
}

export default Header;
