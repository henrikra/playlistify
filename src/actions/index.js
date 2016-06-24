import types from '../constants/ActionTypes';
import { searchYouTube } from '../utils/youtube';

export function fetchVideos(searchTerm) {
  const request = searchYouTube(searchTerm);
  
  return {
    type: types.SEARCH_VIDEOS,
    payload: request
  };
}
