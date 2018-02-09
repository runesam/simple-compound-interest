import {
	CALCULATE_INTEREST,
	UPDATE_INTEREST_TYPE,
} from './../constants';

import InitialStates from './initialStates';

function fieldsReducer(state = InitialStates.result, action) {
	switch (action.type) {
		case CALCULATE_INTEREST:
			return action.payload;
		case UPDATE_INTEREST_TYPE:
			return InitialStates.result;
		default:
			return state;
	}
}

export default fieldsReducer;
