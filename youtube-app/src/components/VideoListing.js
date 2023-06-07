import React from 'react'
import { Link } from 'react-router-dom';

export default function VideoListing({ video }) {

    return (
        <div className='videos-listing'>
          <Link to={`/video/${video.id}`}>
           <img src={video.snippet.thumbnails.medium.url} alt='pop-vid-thumbnail'/>
           <h2>{video.snippet.title}</h2>
           </Link>
        </div>
    );
  }