import { reducer as form } from 'redux-form';
import {
    CALCULATE_INTEREST,
    UPDATE_INTEREST_TYPE,
} from './../constants';

export default form.plugin({
    InterestCalculator: (state, action) => {
        switch (action.type) {
            case CALCULATE_INTEREST:
                return state;
            case UPDATE_INTEREST_TYPE:
                return undefined;
            default:
                return state;
        }
    },
});
