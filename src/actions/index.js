import types from '../constants/ActionTypes';
import { searchYouTube } from '../utils/youtube';

function fetchVideosSuccess(videos) {
  return {
    type: types.SEARCH_VIDEOS,
    videos
  };
}

export function fetchVideos(searchTerm) {
  return dispatch => {
    return searchYouTube(searchTerm)
      .then(({ data }) => dispatch(fetchVideosSuccess(data.items)));
  }
}
