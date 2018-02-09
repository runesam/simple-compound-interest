import { expect } from 'chai';

import formFields from './fieldsReducer';
import {
    UPDATE_INTEREST_TYPE,
} from './../constants';

describe('Reducers', () => {
    describe('Form fields reducer', () => {
        it('is a pure functions', () => {
            const arg1 = Math.random();
            const result = formFields(arg1);
            expect(result).to.equal(arg1);
        });
        it('return the right number of fields for each simple interest type', () => {
            const fields = formFields(undefined, { type: UPDATE_INTEREST_TYPE, payload: 'simple' });
            expect(fields.length).to.equal(3);
        });
        it('return the right number of fields for each compound interest type', () => {
            const fields = formFields(undefined, { type: UPDATE_INTEREST_TYPE, payload: 'compound' });
            expect(fields.length).to.equal(4);
        });
    });
});

