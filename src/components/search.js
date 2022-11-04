import React from 'react';
import Searchlogo from '../assets/search.png';

export default function Search() {
  return (
    <div className='search'>
        <img src={Searchlogo} alt='search-icon' className='search-icon' />
        <input type="text" placeholder='Search' className='search-box' />
    </div>
  )
}
