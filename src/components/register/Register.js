import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import * as actions from 'actions'
import { Redirect } from 'react-router-dom'

class Register extends Component {
    state = {
        errors: [],
        redirect: false
    }
    constructor() {
        super()
        this.registerUser = this.registerUser.bind(this)
    }
    
    registerUser(userData) {
        actions.register(userData).then(
            registered => this.setState({ redirect: true }), 
            errors => this.setState({ errors })
        )
    }
    render() {
        const { errors, redirect } = this.state

        if (redirect) {
            return <Redirect to={{pathname: '/login', state: { successRegister: true }}} />
        }

        return (        
            <section className="form__register">
                <div>
                    <div className="row">
                        <div className="col-md-5">
                            <h1>Register</h1>
                            <RegisterForm submitCb={this.registerUser} errors={errors}/>
                        </div>
                        <div className="col-md-6 ml-auto">
                            <div className="image-container">
                                <h2 className="catchphrase">
                                    As our member you have exclusive access to the best rentals in the world.
                                </h2>
                                <img src={process.env.PUBLIC_URL + '/img/register-image.jpg'} alt="Hello motto"/>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        );
    }
}

export default Register;