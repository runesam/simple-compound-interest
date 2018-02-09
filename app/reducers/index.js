import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

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
