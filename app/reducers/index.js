import { combineReducers } from 'redux';

import form from './interestCalculatorFormReducer';
import fields from './fieldsReducer';
import interestType from './interestTypeReducer';
import interestResult from './interestResultReducer';

const rootReducer = combineReducers({
	form,
	fields,
	interestType,
	interestResult,
});

export default rootReducer;
