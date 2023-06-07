import React from 'react';
import {  getOneVideo } from '../api/fetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Video() {

  const [video, setVideo] = useState();
  const { id } = useParams();
  const [showMore, setShowMore] = useState(false);
  


  useEffect(() => {
    getOneVideo(id)
      .then((response) => {
        setVideo(response);
        console.log(response); 
        console.log(response.items[0].snippet.title); 
      })
      .catch((error) => {
        console.error(error);
      });

  }, [id]);

  const toggleShowBtn = () => {
    setShowMore(!showMore)
  }

  
  return (
    <div>
      {video && (
        <>
            <iframe
            width="950"
            height="550"
            src={`https://www.youtube.com/embed/${video.items[0].id}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Video Player"
          ></iframe>
          <h2>{video.items[0].snippet.title}</h2>
          <div className='video-description'>
          {
                showMore ? (
                    <div>
                        <p>{video.items[0].snippet.description}  <a className='show-more-button' onClick={toggleShowBtn}>Show Less...</a></p>
                       
                        
                    </div>
                ) : (
                    <a className='show-more-button' onClick={toggleShowBtn}>Show More...</a>
                )
            }
          </div>
        </>
      )}

      <div className='related-videos'>
        {
}
      </div>
    </div>
  );
}

export default Video;
