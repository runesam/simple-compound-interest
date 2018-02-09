import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Header = () => (
    <nav>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        {' | '}
        <NavLink to='/calculator' activeClassName='active'>Interest Calculator</NavLink>
        {' | '}
        <NavLink to='/login' activeClassName='active'>Login</NavLink>
    </nav>
);

export default Header;
