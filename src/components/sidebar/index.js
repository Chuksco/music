import React from 'react';
import '../sidebar/sidebar.css';
import logo from '../../images/winamp-logo.webp';


export default function Sidebar() {
  return (
    <>
      <div className='sidebar-container'>
      <img src={logo} alt="Profile" className='profile-img' />
      </div>
    </>
  )
}
