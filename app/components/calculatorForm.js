import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import fieldComponent from './renderField';

const CalculatorForm = ({
    handleSubmit, onSubmit, submitting, fields,
}) => (
    <form onSubmit={handleSubmit(onSubmit)} className='col-xs-12'>
        {fields.map(({
        name, type, label, placeholder, options,
    }) => (
                <Field
                    key={name}
                    name={name}
                    type={type}
                    component={fieldComponent}
                    label={label || ''}
                    placeholder={placeholder || ''}
                    options={options || []}
                />
            ))}
        <div>
            <button
                className='btn btn-warning submit-button'
                type='submit'
                disabled={submitting}
            >
                Submit!
            </button>
        </div>
    </form>
);

CalculatorForm.defaultProps = {
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    fields: PropTypes.array,
};

CalculatorForm.propTypes = {
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    fields: PropTypes.array,
};

export default CalculatorForm;
