import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Home() {
  const [mostPopularList, setMostPopularList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((response) => {
        let popularVideo = response.items;
        let trendingVideo = popularVideo.map((video, index) => {
          let popularVImg = video.snippet.thumbnails.medium.url;
          return (
            <li key={index}>
              <Link to={`/video/${video.id}`} onClick={() => handleClick(video.id)}>
                <img src={popularVImg} alt='pop-vid-thumbnail' />
                <h2>{video.snippet.title}</h2>
              </Link>
            </li>
          );
        });
        setMostPopularList(trendingVideo);
      });
  }, []);

  const handleClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div>
      <div className='most-popular-results'>
        {mostPopularList}
      </div>
    </div>
  );
}

export default Home;