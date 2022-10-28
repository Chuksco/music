import React, { useEffect, useState } from 'react';
import '../sidebar/sidebar.css';
import SidebarButton from './sidebarButton';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaPlay, FaFire } from 'react-icons/fa';
import { MdLibraryMusic } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';
import apiClient from '../../spotify';



export default function Sidebar() {
  const [image, setImage] = useState(
    "https://imgs.search.brave.com/-TJs8mqzbiOT5CZE81ntp1imNAn1AgmkdvDkly5ppKg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/c29mdHdhcmVwYXRj/aC5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3dpbmFtcC1sb2dv/LnBuZw"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
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
