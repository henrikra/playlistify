import axios from 'axios';

const YOUTUBE_DATA_API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyCPLAZUcdIklVIGjfU5_WemijkkkxVsErU';

export function searchYouTube(searchTerm, callback) {
  const params = {
    type: 'video',
    part: 'snippet',
    key: API_KEY,
    maxResults: 20,
    q: searchTerm
  };

  axios.get(YOUTUBE_DATA_API_URL, { params })
    .then(response => {
      if (callback) {
        callback(response.data.items);
      }
    })
    .catch(error => {
      console.error(error);
    });
}
