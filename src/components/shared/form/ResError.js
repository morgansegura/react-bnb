import React from 'react'

export const ResError = (props) => {
    const errors = props.errors

    return (
        errors.length > 0 &&
        <div className="alert alert-danger res-errors">
            {errors.map((error, i) => <p key={i}>{error.detail}</p>)}
        </div>
    )
}