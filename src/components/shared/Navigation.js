import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
//import Button from '@material-ui/core/Button';

class Navigation extends Component {
    render() {
        return (
            <nav className="nav">
                <IconButton className="main-menu__icon" color="inherit" aria-label="Account">
                    <AccountCircle />
                </IconButton>                  
                <IconButton className="main-menu__icon" color="inherit" aria-label="Menu">
                    <MoreIcon />
                </IconButton>
            </nav>
        );
    }
}

export default Navigation;