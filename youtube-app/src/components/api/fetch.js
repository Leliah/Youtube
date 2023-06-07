const KEY = process.env.REACT_APP_API_KEY
// Index/Get all
export function getAllVideos() {
    return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=${KEY}`).then((response) => response.json());
  }