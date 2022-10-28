import React from 'react';
import { loginEndpoint } from '../spotify';
import './login.css';
import logo from '../images/winamp-logo.webp';

export default function Login() {
    return (
        <div className='login-page'>
            <img src={logo} 
            alt='logo-spotify' className='logo' />
            <a href={loginEndpoint}>
                <div className='login-btn'>LOG IN</div>
            </a>
        </div>
    )
}
