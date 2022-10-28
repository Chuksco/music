import React from 'react';
import { loginEndpoint } from '../spotify';
import './login.css';

export default function Login() {
    return (
        <div className='login-page'>
            <img src="https://imgs.search.brave.com/bAQcuhLFXbh10wzQWvrRp-9hBNn3j4KWQP68-zfZXBM/rs:fit:1200:1200:1/g:ce/aHR0cDovLzEwMDBs/b2dvcy5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDgv/U3BvdGlmeS1Mb2dv/LnBuZw" 
            alt='logo-spotify' className='logo' />
            <a href={loginEndpoint}>
                <div className='login-btn'>LOG IN</div>
            </a>
        </div>
    )
}
