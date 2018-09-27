import React from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'

export const Header = () => {
    return (
        <header position="static" className="header">
            <div className="container">
                <div className="main-menu">
                    <h2 className="main-menu__logo" variant="title" color="inherit">
                        <Link to="/">React BNB</Link>
                    </h2>
                    <Navigation />   
                </div>          
            </div>
        </header>            
    )
}