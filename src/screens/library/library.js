import React, { useState } from 'react';
import APIKit from '../../spotify'

export default function Library() {

  const [playlists, setPlaylists] = useState(null);

  APIKit.get("me/playlists").then(function(response) {
    console.log(response.data);
    console.log(response.data.items);
  })
  return <div className='screen-container'>
    {playlists?.map((playlist) => {
      <div></div>;
    })}
  </div>
}
