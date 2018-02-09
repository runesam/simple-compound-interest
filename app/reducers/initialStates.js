const InitialStates = {
    fields: [
        {
            name: 'principal', type: 'number', label: 'What amount of money is loaned or borrowed? \n(this is the principal amount)', placeholder: '$',
        },
        {
            name: 'interestRate', type: 'number', label: 'What is the interest rate (in percent) attached to this money?', placeholder: '%',
        },
        {
            name: 'timePeriod', type: 'number', label: 'After how much time do you want to know what your interest will be?', placeholder: 'year(s)',
        },
    ],
    compoundField: {
        name: 'compoundFrequency',
        type: 'select',
        label: 'compound frequency is ?',
        options: [
            { text: 'please select the frequency', value: '' },
            { text: 'Year (annual interest)', value: 12 },
            { text: '6 months', value: 6 },
            { text: 'Monthly', value: 1 },
        ],
    },
    interestType: '',
    result: null,
};

export default InitialStates;
