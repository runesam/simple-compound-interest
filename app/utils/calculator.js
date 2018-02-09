function calcSimpleInterest(principal, interestRate) {
    return principal * (interestRate / 100);
}

function constructSingleYearDetailsData(principal, interestRate, year) {
    const interests = calcSimpleInterest(principal, interestRate);
    const amount = principal + (interests * year);
    return [year, interests, amount];
}

function calcSimple(principal, interestRate, timePeriod) {
    const simpleResult = principal * (interestRate / 100) * timePeriod;
    const totals = [
        {
            text: 'Grand total of interest',
            value: simpleResult,
        },
        {
            text: 'Grand total of amount',
            value: principal + simpleResult,
        },
    ];
    const details = {
        heads: ['Year', 'Interests', 'Amount'],
        data: [],
    };
    for (let i = 0; i < timePeriod; i += 1) {
        details.data.push(constructSingleYearDetailsData(principal, interestRate, i + 1));
    }
    return { totals, details };
}

function calcCompound(principal, interestRate, timePeriod, compoundFrequency) {
    const compoundCountPerYear = 12 / compoundFrequency;

    const totalResult = (
        principal * ((1 + (interestRate / (compoundCountPerYear * 100)))
        **
        (compoundCountPerYear * timePeriod))
    );

    const details = {
        heads: ['Year', 'Interests', 'Amount'],
        data: [],
    };

    for (let i = 0; i < timePeriod; i += 1) {
        const currentResult = (principal * (
            (1 + (interestRate / (compoundCountPerYear * 100)))
            **
            (compoundCountPerYear * (i + 1))
        )).toFixed(2);
        details.data.push([i + 1, (currentResult - principal).toFixed(2), currentResult]);
    }

    const totals = [
        {
            text: 'Grand total of interest',
            value: (totalResult - principal).toFixed(2),
        },
        {
            text: 'Grand total of amount',
            value: totalResult.toFixed(2),
        },
    ];
    return { totals, details };
}

module.exports = {
    calculate: ({
        principal,
        interestRate,
        timePeriod,
        interestType,
        compoundFrequency,
    }) => {
        if (interestType === 'simple') {
            return calcSimple(principal, interestRate, timePeriod);
        }
        return calcCompound(principal, interestRate, timePeriod, compoundFrequency);
    },
};
