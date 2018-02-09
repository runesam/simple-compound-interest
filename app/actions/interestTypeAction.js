import { UPDATE_INTEREST_TYPE } from './../constants';

function updateInterestType(type) {
    return { type: UPDATE_INTEREST_TYPE, payload: type };
}

export default updateInterestType;
