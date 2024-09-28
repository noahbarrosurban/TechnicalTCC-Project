import React from 'react';

import './styles.css';

import user from '../../assets/user.png';


export default function NavBar() {
    return (
        <div className="navbar">
            <img src={user} alt="User" className="icon"/>
        </div>
    );
}