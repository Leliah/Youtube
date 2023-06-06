import React from 'react'
import './Home.css'
import { useEffect, useState } from 'react';
import { getAllVideos } from '../api/fetch';
import { useNavigate } from 'react-router-dom';
import VideoPage from './VideoPage';

function Home() {

    const [allVideos, setAllVideos] = useState([]);

    const navigate = useNavigate();

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
        console.log("running")
      };

  return (
    <div>
        <div className='most-popular-results'>
            {
                allVideos.map((video, index) => {
                    // console.log(video)
                    let popularVImg = video.snippet.thumbnails.medium.url;
                
                    return(
                        
                      <li  onClick={() => handleClick(video.id)} key={index}>
                          <img src={popularVImg} alt='pop-vid-thumbnail'/>
                          <h2>{video.snippet.title}</h2>
                          <VideoPage video={video} />
                      </li>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Home