import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Inputs } from 'components/shared/form/Inputs'
import { ResError } from 'components/shared/form/ResError'
import { required, minLength4 } from 'components/shared/form/Validate'

const LoginForm = props => {
    const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
    return (
        <form onSubmit={handleSubmit(submitCb)}>
            <Field
                name="email"
                type="email"
                label="Email"
                className="form-control"
                component={Inputs}
                validate={[required, minLength4]}
            />
            <Field
                name="password"
                type="password"
                label="Password"
                className="form-control"
                component={Inputs}
                validate={[required]}
            />
            <div className="submit-block my-3">
                <button className="btn btn--cta" type="submit" disabled={!valid || pristine || submitting}>
                    Login
                </button>
            </div>
            <ResError errors={errors} />
        </form>
    )
}


export default reduxForm({
    form: 'loginForm'
})(LoginForm)
