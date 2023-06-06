import React from "react";
import { Link } from 'react-router-dom';

export default function VideoPage({ video }) {
  if (!video || !video.id) {
    return null;
  }

  const videoId = video.id;
  const videoTitle = video.snippet.title;

  return (
    <Link to={`/video/${videoId}`}>
      <div>
      <h1>Hello</h1>
      <img src={video.snippet.thumbnails.medium.url} alt={videoTitle} />
      <h3>{videoTitle}</h3>
      </div>
    </Link>
  );
}
