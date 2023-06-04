import React from 'react'
import './Home.css'
import { useEffect, useState } from 'react';
import { getAllVideos } from '../api/fetch';

function Home() {

    const [allVideos, setAllVideos] = useState([]);

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



  return (
    <div>
        <div className='most-popular-results'>
            {
                allVideos.map((video, index) => {
                    // console.log(video)
                    let popularVImg = video.snippet.thumbnails.medium.url;
                    return(
                      <li key={index}>
                          <img src={popularVImg} alt='pop-vid-thumbnail'/>
                          <h2>{video.snippet.title}</h2>
                      </li>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Home