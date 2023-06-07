import React from 'react'
import './Home.css'
import { useEffect, useState } from 'react';

function Home() {
    const [mostPopularList, setMostPopularList] = useState([]);

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(response => {
            //console.log(response, 'tube of you');

            let popularVideo = response.items;
            console.log(popularVideo)
            
            let trendingVideo = popularVideo.map((video, index) => {
                console.log(video);

                let popularVImg = video.snippet.thumbnails.medium.url;
                return(
                    <li key={index}>
                        <img src={popularVImg} alt='pop-vid-thumbnail'/>
                        <h2>{video.snippet.title}</h2>
                    </li>
                )
            })
            setMostPopularList(trendingVideo);
        });

    })

  return (
    <div>
        <div className='most-popular-results'>
            {mostPopularList}
        </div>
    </div>
  );
}

export default Home;
