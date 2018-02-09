function validate(values) {
    const errors = {};

    if (!values.principal) {
        errors.principal = 'valid principal is required';
    }
    if (!values.interestRate) {
        errors.interestRate = 'valid interest rate is required';
    }
    if (!values.timePeriod) {
        errors.timePeriod = 'valid time period is required';
    }
    if (!values.compoundFrequency) {
        errors.compoundFrequency = 'valid compound frequency is required';
    }
    return errors;
}

export default validate;
