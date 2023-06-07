// import React from "react";

// export default function VideoPage({ video }) {
//   if (!video || !video.id) {
//     return null;
//   }

//   console.log("HELLOOO");

//   const videoId = video.id.videoId;
//   const videoTitle = video.snippet.title;

//   return (
//     <div>
//       <h1>Hello</h1>
//       <img src={video.snippet.thumbnails.default.url} alt={videoTitle} />
//       <h3>{videoTitle}</h3>
//     </div>
//   );
// }

import React from "react";

export default function VideoPage({ video }) {
  if (!video || !video.id) {
    return null;
  }

  console.log("HELLOOO");

  const videoTitle = video.snippet.title;

  return (
    <div>
      <h1>Hello</h1>
      <img src={video.snippet.thumbnails.default.url} alt={videoTitle} />
      <h3>{videoTitle}</h3>
    </div>
  );
}

