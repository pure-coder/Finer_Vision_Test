import React from 'react'
import classnames from 'classnames';

// Input all properties as parameters
const FormSelectComp = ({
                            myClassName,
                            name,
                            id,
                            values,
                            onChange,
                            error
                        }) => {

    const selectValues = values.map(value => {
        return (
            <option key={value} value={value}>{value}</option>
        )
    });

    return (
        <div className={myClassName}>
            <select name={name}
                    className={classnames({'is-invalid': error})}
                    id={id}
                    onChange={onChange}
            >
                <option value="">Please select</option>
                {selectValues}
            </select>


            {/* This adds the feedback to the user (which was defined in*/}
            {/*  validation/registration.js on the API server*/}
            {error ? (<div className="invalid-feedback">{error}</div>) : (<div className="feedback"></div>)}
        </div>
    )
};

export default FormSelectComp;
