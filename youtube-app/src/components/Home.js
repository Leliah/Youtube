import React from 'react'
import { Link} from 'react-router-dom';
import './Home.css'
import { useEffect, useState } from 'react';
import { getAllVideos, category } from '../api/fetch';
import VideoListing from './VideoListing';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [allVideos, setAllVideos] = useState([]);

    let navigate = useNavigate()
;
    useEffect(() => {
        getAllVideos()
          .then((response) => {
            setAllVideos(response.items);
            //  console.log(allVideos)
          })
           .catch((error) => {
             console.error(error);
           });
      }, []);

      const handleClick = (videoId) => {
        navigate(`/video/${videoId}`);
      
      }
      



  return (
    <div>
        <div className='most-popular-results'>
            {
                allVideos.map((video, index) => {
                  return <VideoListing video={video} key={video.id} index={index}/>
                })//MAP CLOSING TAG
            }
        </div> 

        <div className='side-nav'>
            <Link to='/'>
              Home
            </Link>
            <Link to='/About'>
              About
            </Link>
        </div>
    </div>
  )
}

export default Home

