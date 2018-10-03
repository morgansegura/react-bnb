import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom'
//import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Navigation extends Component {

    state = {
        auth: true,
        anchorEl: null,
    };
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    }; 

    render(props) {

        //const { classes } = this.props;
        //const { auth, anchorEl } = this.state;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);        

        return (
            <nav className="nav">
 
                <IconButton 
                    className="main-menu__icon" 
                    color="inherit" 
                    aria-label="Account"
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}                    
                >
                    <AccountCircle />
                </IconButton>                  
                <IconButton className="main-menu__icon icon__more" color="inherit" aria-label="Menu" >
                    <MoreIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >

                    <MenuItem onClick={this.state.auth}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>

                    <MenuItem onClick={this.handleClose}>
                        <Link to="/register">Register</Link>
                    </MenuItem>

                    <MenuItem onClick={this.handleClose}>
                        <Link to="/register">Register</Link>
                    </MenuItem>
                    <MenuItem>
                        <p onClick={props.logout}>Logout</p>
                    </MenuItem>
                </Menu>                
            </nav>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation)