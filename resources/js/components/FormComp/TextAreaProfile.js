import React from 'react';

const TextAreaProfile = ({
                  onSubmit,
                  myClassName,
                  onChange,
                  value,
                  label,
                  name,
                  success,
                  fieldUpdated,
                  errors,
                  ptCheck,
                  rows,
                  cols
              }) =>{
    return (
        <div>
            <textarea
                className={myClassName}
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
                cols={cols}>
            </textarea>
        </div>
    )
};

export default TextAreaProfile;
