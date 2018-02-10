import React from 'react';

import './index.scss';

import wall from './../../assets/img/time_wallpaper.jpg';
import notify from './../../assets/img/notify.svg';

const filterFields = [
    [
        { text: 'Party of 1', value: 1 },
        { text: 'Party of 2', value: 2 },
        { text: 'Party of 3', value: 3 },
    ],
    [
        { text: 'Select Time', value: '' },
        { text: '10:00 AM', value: 10 },
        { text: '03:30 Pm', value: 15 },
    ],
    [
        { text: 'Today, 13/10/2017', value: 'today' },
        { text: 'Tomorrow, 14/10/2017', value: 'tomorrow' },
        { text: 'Later, 15/10/2017', value: 'after tomorrow' },
    ],
];

const times = [
    {
        text: 'Lunch',
        options: [
            { time: '10:00 AM', where: 'Dining Room' },
            { time: '10:15 AM', where: 'Dining Room' },
            { time: '10:30 AM', where: 'Dining Room', disable: true },
            { time: '10:45 AM', where: 'Dining Room' },
            { time: '11:00 AM', where: 'Balcony' },
            { time: '11:15 AM', where: 'Dining Room' },
            { time: '11:30 AM', where: 'Dining Room' },
            { time: '11:45 AM', where: 'Balcony' },
            { time: '12:00 PM', where: 'Dining Room' },
            { time: '12:15 PM', where: 'Dining Room' },
            { time: '12:30 PM', where: 'Dining Room' },
        ],
    },
    {
        text: 'Dinner',
        options: [
            { time: '06:00 PM', where: 'Dining Room' },
            { time: '06:15 PM', where: 'Dining Room' },
            { time: '06:30 PM', where: 'Dining Room', disable: true },
            { time: '10:45 PM', where: 'Dining Room' },
            { time: '11:00 PM', where: 'Dining Room' },
            { time: '11:15 PM', where: 'Dining Room' },
        ],
    },
];

const days = [];

for (let i = 0; i < 9; i += 1) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + i);
    days.push({
        text: i === 0 ? 'Today' : tomorrow.toLocaleDateString('en-UK', { weekday: 'short' }),
        number: tomorrow.getDate(),
        status: i === 0 ? 'selected' : i === 4 ? 'inActive' : i === 5 ? 'full' : '',
    });
}

const Home = () => (
    <div className='row step'>
        <div className='col-12 header'>
            <div className='index float-left'>
                <span>1</span>
            </div>
            <div className='text float-left'>
                <span>Select a Time</span>
            </div>
        </div>
        <div className='content'>
            <div className='brand-name'>
                <span>Tippling Club</span>
            </div>
            <div className='image-holder'>
                <img src={wall} alt='book your table now' />
            </div>
            <div className='filter-section'>
                {filterFields.map(item => (
                    <div className='select-input float-left' key={item[0].value + Math.random()}>
                        <select defaultValue={item[0].value}>
                            {item.map(option => (
                                <option key={option.text} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
            <div className='days-section float-left'>
                <div className='col-11 float-left days'>
                    {days.map((day, key) => (
                        <div key={day.text + day.number} className='float-left day'>
                            <span>{day.text}</span>
                            <div className={day.status}>{day.number}</div>
                            {key === days.length - 1 && <div className='line' />}
                        </div>
                    ))}
                </div>
                <div className='col-1 float-left days'>
                    <div className='float-left day'>
                        <span />
                        <div>+</div>
                    </div>
                </div>
            </div>
            <br />
            <div className='times-section'>
                {times.map((item, key) => (
                    <div key={item.text} className='time-section clearfix'>
                        <b>{item.text}</b>
                        <div className='clearfix' />
                        <div className='options'>
                            {item.options.map(option => (
                                <div key={option.time} className={`time-option ${option.disable ? 'disable' : ''}`}>
                                    <span>{option.time}</span>
                                    <span>{option.where}</span>
                                </div>
                            ))}
                            {key === 0 && (
                                <div className='time-option notify'>
                                    <img src={notify} alt='notify me' />
                                    <span>Notify Me</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <br />
        </div>
        <div className='col-12 float-left footer'>
            <div className='index float-left'>
                <span>2</span>
            </div>
            <div className='text float-left'>
                <span>Details</span>
            </div>
        </div>
    </div>
);

export default Home;
