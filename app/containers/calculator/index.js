import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import CalculatorForm from './../../components/calculatorForm';
import ResultTable from './../../components/resultTable';

import validate from './../../utils/formValidate';
import general from './../../utils/general';

// actions
import updateInterestType from './../../actions/interestTypeAction';
import calculateInterest from './../../actions/interestCalculateAction';

class FieldArraysForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleUpdateInterestType = this.handleUpdateInterestType.bind(this);
    }
    onSubmit(data) {
        const NumerizedData = Object.keys(data).reduce((accumulator, currentValue) => {
            const temp = accumulator;
            temp[currentValue] = Number(data[currentValue]);
            return temp;
        }, {});
        this.props.calculateInterest(Object.assign({}, NumerizedData, {
            interestType: this.props.interestType,
        }));
        setTimeout(() => general.scrollDown());
    }
    handleUpdateInterestType(e) {
        this.props.updateInterestType(e.target.value);
    }
    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <div className='col-xs-12'>
                <br />
                <p>
                    <b>Interest is money you can earn by initially investing some money
                    (the principal). A percentage (the interest) of the principal is added to
                    the principal, making your initial investment grow!
                    </b>
                </p>
                <div className='form-group'>
                    <label htmlFor='interestType'>Interest Type</label>
                    <select
                        className='form-control'
                        id='interestType'
                        defaultValue=''
                        onChange={this.handleUpdateInterestType}
                    >
                        <option value='' disabled>please select a type</option>
                        <option value='simple'>Simple</option>
                        <option value='compound'>Compound</option>
                    </select>
                </div>
                <div className='col-xs-12 col-md-6 float-left'>
                    {this.props.interestType && (
                        <CalculatorForm
                            fields={this.props.fields}
                            handleSubmit={handleSubmit}
                            onSubmit={this.onSubmit}
                            submitting={submitting}
                        />
                    )}
                </div>
                <div className='col-xs-12 col-md-6 float-left'>
                    {this.props.interestResult && (
                        <ResultTable results={this.props.interestResult} />
                    )}
                </div>
            </div>
        );
    }
}

FieldArraysForm.defaultProps = {
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    fields: PropTypes.array,
    interestType: PropTypes.string,
    updateInterestType: PropTypes.func,
    interestResult: PropTypes.object,
    calculateInterest: PropTypes.func,
};

FieldArraysForm.propTypes = {
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    fields: PropTypes.array,
    interestType: PropTypes.string,
    updateInterestType: PropTypes.func,
    interestResult: PropTypes.object,
    calculateInterest: PropTypes.func,
};

const InterestCalculator = reduxForm({
    form: 'InterestCalculator',
    enableReinitialize: true,
    validate,
})(FieldArraysForm);

function mapStateToProps({
    fields,
    compoundField,
    interestType,
    interestResult,
}) {
	return {
        fields,
        compoundField,
        interestType,
        interestResult,
	};
}

export default withRouter(connect(mapStateToProps, {
    updateInterestType,
    calculateInterest,
})(InterestCalculator));
