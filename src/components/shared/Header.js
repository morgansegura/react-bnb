import React from 'react'
import Navigation from './Navigation'

export const Header = () => {
    return (
        <header position="static" className="header">
            <div className="container">
                <div className="main-menu">
                    <h2 className="main-menu__logo" variant="title" color="inherit">
                        React BNB
                    </h2>
                    <Navigation />   
                </div>          
            </div>
        </header>            
    )
}