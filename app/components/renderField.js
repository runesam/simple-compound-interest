import React from 'react';
import PropTypes from 'prop-types';

const RenderField = ({
    input, label, type, placeholder, meta: { touched, error }, options,
}) => {
    if (type !== 'select') {
        return (
            <div>
                <span>{label}</span>
                <div className='form-group'>
                    <input {...input} type={type} className={`form-control ${touched && error ? 'error' : ''}`} placeholder={placeholder} />
                    {touched && error && <span className='validation-error'>{error}</span>}
                </div>
            </div>
        );
    }
    return (
        <div>
            <div className='form-group'>
                <span>{label}</span>
                <select {...input} className={`form-control ${touched && error ? 'error' : ''}`}>
                    {options.map(option => (
                        <option
                            key={option.text}
                            value={option.value}
                        >
                            {option.text}
                        </option>
                    ))}
                </select>
                {touched && error && <span className='validation-error'>{error}</span>}
            </div>
        </div>
    );
};

RenderField.defaultProps = {
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    meta: PropTypes.object,
    options: PropTypes.array,
};

RenderField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    meta: PropTypes.object,
    options: PropTypes.array,
};

export default RenderField;
