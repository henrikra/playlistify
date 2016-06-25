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
  };
}

export function addVideoToPlaylist(video) {
  return {
    type: types.ADD_TO_PLAYLIST,
    video
  };
}

export function removeVideoFromPlaylist(videoId) {
  return {
    type: types.REMOVE_FROM_PLAYLIST,
    videoId
  };
}

export function playVideo(videoId) {
  return {
    type: types.ADD_VIDEO_TO_PLAYER,
    videoId
  };
}

export function pausePlayer() {
  return {type: types.PAUSE_PLAYER};
}

export function playNext() {
  return {type: types.PLAY_NEXT};
}
