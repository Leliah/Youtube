import React from 'react'
import { Link } from 'react-router-dom';
import './VideoListing.css'

export default function VideoListing({ video }) {

    return (
        <div className='videos-listing'>
          <Link to={`/video/${video.id}`} style={{textDecoration: 'none', color: 'black'}}>
           <img src={video.snippet.thumbnails.medium.url} alt='pop-vid-thumbnail'/>
           <h2>{video.snippet.title}</h2>
           <p>{video.snippet.channelTitle}</p>
           </Link>
        </div>
    );
  }