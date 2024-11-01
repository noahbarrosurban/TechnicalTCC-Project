import React from 'react';

import './styles.css';

import user from '../../assets/user.png';
import logo from '../../assets/logo.png';


export default function NavBar() {
    return (
        <div className="navbar">
            <a href="/equipamentos">
                <img src={logo} alt="Logo" className="logo" />
            </a>
            <img src={user} alt="User" className="icon"/>
        </div>
    );
}