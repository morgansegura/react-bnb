import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Inputs } from 'components/shared/form/Inputs'
import { ResError } from 'components/shared/form/ResError'

const RegisterForm = props => {
    const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
    return (
        <form onSubmit={handleSubmit(submitCb)}>
            <Field
                name="username"
                type="text"
                label="Username"
                className="form-control"
                component={Inputs}
            />
            <Field
                name="email"
                type="email"
                label="Email"                
                className="form-control"
                component={Inputs}
            />
            <Field
                name="password"
                type="password"
                label="Password"                
                className="form-control"
                component={Inputs}
            />
            <Field
                name="passwordConfirmation"
                type="password"
                label="Confirm Password"                
                className="form-control"
                component={Inputs}
            />
            <div className="submit-block my-3">
                <button className="btn btn--cta" type="submit" disabled={!valid || pristine || submitting}>
                    Register
                </button>
            </div>
            <ResError errors={ errors } />
        </form>
    )
}

const validate = values => {
    const errors = {}

    if (values.username && values.username.length < 4) {
        errors.username = 'Username min length is 4 characters'
    }

    if (!values.email) {
        errors.email = 'Please enter an email'
    }
    if (values.password !== values.passwordConfirmation) {
        errors.password = 'Passwords must match!'
    }

    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Passwords must match'
    }

    return errors
}

export default reduxForm({
    form: 'registerForm',
    validate
})(RegisterForm)