import {
    CALCULATE_INTEREST,
} from './../constants';

import InitialStates from './initialStates';

function fieldsReducer(state = InitialStates.result, action) {
	switch (action.type) {
		case CALCULATE_INTEREST:
			return action.payload;
		default:
			return state;
	}
}

export default fieldsReducer;
