import InitialStates from './initialStates';
import {
    UPDATE_INTEREST_TYPE,
} from './../constants';

function fieldsReducer(state = InitialStates.fields, action = {}) {
	let formFields;
	switch (action.type) {
		case UPDATE_INTEREST_TYPE:
			if (action.payload === 'simple') {
				formFields = InitialStates.fields;
			} else {
				formFields = [...InitialStates.fields, InitialStates.compoundField];
			}
			return formFields;
		default:
			return state;
	}
}

export default fieldsReducer;
