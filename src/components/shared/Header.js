import React from 'react'
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
///import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';

// Components
import Navigation from './Navigation'

export const Header = () => {
    return (
        <header position="static" className="header">
            <div className="container">
                <div className="main-menu">
                    <h2 className="main-menu__logo" variant="title" color="inherit">
                        BNB React
                    </h2>
                    <Navigation />   
                </div>          
            </div>
        </header>            
    )
}