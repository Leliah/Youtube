import { useEffect, useState } from 'react';
import { getAllVideos } from '../api/fetch';
import VideoListing from './VideoListing';
import './Home.css'

function Home() {

    const [allVideos, setAllVideos] = useState([]);

;
useEffect(() => {
  getAllVideos()
    .then((response) => {
      setAllVideos(response.items);
      //console.log(allVideos); 
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
                  return <VideoListing video={video} key={video.id} index={index}/>
                })//MAP CLOSING TAG
            }
        </div> 
    </div>
  );
}

export default Home

