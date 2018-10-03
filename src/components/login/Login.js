import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from 'actions'

class Login extends Component {

    constructor() {
        super()
        this.loginUser = this.loginUser.bind(this)
    }

    loginUser(userData) {
        this.props.dispatch(actions.login(userData))
    }

    render() {

        const { isAuth, errors } = this.props.auth
        const { successRegister } = this.props.location.state || false

        if (isAuth) {
            return <Redirect to={{ pathname: '/rentals'}} />
        }

        return (
            <section className="form__login">
                <div>
                    <div className="row">
                        <div className="col-md-5">
                            <h1>Login</h1>
                            {
                                successRegister && 
                                    <div className="alert alert-success">
                                        <p>You have been successfully registered, please login.</p>
                                    </div>
                            }
                            <LoginForm submitCb={this.loginUser}  errors={errors}/>
                        </div>
                        <div className="col-md-6 ml-auto">
                            <div className="image-container">
                                <h2 className="catchphrase">Hudreds of awesome places in reach of a few clicks.</h2>
                                <img src={process.env.PUBLIC_URL + '/img/login-image.jpg'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Login)