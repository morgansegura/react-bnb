import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {

    constructor() {
        super()

        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        this.props.logout()
        this.props.history.push('/rentals')
    }

    renderAuthButtons() {
        const { isAuth } = this.props.auth

        if (isAuth) {
            return <p className="nav__item" onClick={this.handleLogout}>Logout</p>
        }
        return (
                <React.Fragment>
                    <NavLink className="nav__item" to="/register" activeClassName="active">Register</NavLink>
                    <NavLink className="nav__item" to="/login" activeClassName="active">Login</NavLink>                      
                </React.Fragment>
            )        
    }

    render() {

        return (
            <header position="static" className="header">
                <div className="container">
                    <div className="main-menu">
                        <h2 className="main-menu__logo" variant="title" color="inherit">
                            <NavLink to="/">React BNB</NavLink>
                        </h2>
                        <nav className="nav nav--dark ml-auto">
                            { this.renderAuthButtons() }
                        </nav>
                    </div>
                </div>
            </header>
        );        
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default withRouter(connect(mapStateToProps)(Header))