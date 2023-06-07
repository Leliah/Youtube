// import React, { useEffect, useState } from 'react';
// import { getAllVideos } from './api/fetch';


// function Home() {
//   const [allVideos, setAllVideos] = useState([]);

//   useEffect(() => {
//     getAllVideos()
//       .then((response) => {
//         setAllVideos(response.items);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       <div className="most-popular-results">
//         {allVideos.map((video, index) => {
//           let popularVImg = video.snippet.thumbnails.medium.url;
//           return (
//             <li key={index}>
//               <img src={popularVImg} alt="pop-vid-thumbnail" />
//               <h2>{video.snippet.title}</h2>
//             </li>
//           );
//         })}
//       </div>

     
//     </div>
//   );
// }

// export default Home;


import React, { useEffect, useState } from "react";
// import "./Home.css";
import { getAllVideos } from "./api/fetch";
import { Link } from "react-router-dom";

function Home() {
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    getAllVideos()
      .then((response) => {
        setAllVideos(response.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="most-popular-results">
        {allVideos.map((video, index) => {
          let popularVImg = video.snippet.thumbnails.medium.url;
          return (
            <Link key={`${video.id.videoId}-${index}`} to={`/video/${video.id.videoId}`}>
              <img src={popularVImg} alt="pop-vid-thumbnail" />
              <h2>{video.snippet.title}</h2>
            </Link>

          );
        })}
      </div>
    </div>
  );
}

export default Home;
