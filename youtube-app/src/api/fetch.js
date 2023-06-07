const KEY = process.env.REACT_APP_API_KEY
// Index/Get all
export function getAllVideos() {
    return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${KEY}`).then((response) => response.json());
  }

  // video/Get one
export function getOneVideo(id) {
const KEY = process.env.REACT_APP_API_KEY
  return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${KEY}`).then((response) => response.json());
}

export function category(id){
const KEY = process.env.REACT_APP_API_KEY
  return fetch(`https://youtube.googleapis.com/youtube/v3/videoCategories?id=${id}&key=${KEY}`).then((response) => response.json());
}