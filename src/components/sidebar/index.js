import React, { useEffect, useState } from 'react';
import '../sidebar/sidebar.css';
import logo from '../../images/winamp-logo.webp';
import SidebarButton from './sidebarButton';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaPlay, FaFire } from 'react-icons/fa';
import { MdLibraryMusic } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';



export default function Sidebar() {
  const (image, setImage) = useState
  useEffect(() => {

  }, []);
  return (
    <>
      <div className='sidebar-container'>
        <img src={image} alt="Profile" className='profile-img' />
        <div>
          <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
          <SidebarButton title="Trending" to="/trending" icon={<FaFire />} />
          <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
          <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
          <SidebarButton title="Library" to="library" icon={<MdLibraryMusic />} />
        </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
      </div>
    </>
  )
}
