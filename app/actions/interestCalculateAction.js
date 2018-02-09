import { CALCULATE_INTEREST } from './../constants';
import calculator from './../utils/calculator';

function calculateInterest(data) {
    const payload = calculator.calculate(data);
    return { type: CALCULATE_INTEREST, payload };
}

export default calculateInterest;
