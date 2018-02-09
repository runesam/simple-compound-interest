import React from 'react';
import { PropTypes } from 'prop-types';

const ResultTable = ({ results }) => (
    <div className='container'>
        <table className='table table-hover'>
            <thead>
                <tr>
                    {results.details.heads.map(value => <th key={value}>{value}</th>)}
                </tr>
            </thead>
            <tbody>
                {results.details.data.map(row => (
                    <tr key={row}>
                        {row.map(value => <th key={value}>{value}</th>)}
                    </tr>
                ))}
            </tbody>
        </table>
        <hr />
        <div className='col-xs-12'>
            {results.totals.map(item => (
                [
                    <p key={item.text}><strong>{`${item.text}: `}</strong>{item.value}</p>,
                    <hr key={item.text + Math.random()} />,
                ]
            ))}
        </div>
    </div>
);

export default ResultTable;

ResultTable.defaultProps = {
    results: PropTypes.object,
};

ResultTable.propTypes = {
    results: PropTypes.object,
};
