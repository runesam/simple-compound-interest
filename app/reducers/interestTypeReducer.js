import {
    UPDATE_INTEREST_TYPE,
} from './../constants';

import InitialStates from './initialStates';

function fieldsReducer(state = InitialStates.interestType, action) {
	switch (action.type) {
		case UPDATE_INTEREST_TYPE:
			return action.payload;
		default:
			return state;
	}
}

export default fieldsReducer;
