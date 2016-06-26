import types from '../constants/ActionTypes';

const hasDifferentId = videoId => {
  return video => video.id.videoId !== videoId;
};

const hasId = videoId => {
  return video => video.id.videoId === videoId;
};

const isInPlaylist = (videos, newVideoId) => {
  return videos.filter(hasId(newVideoId)).length;
};

const handleRemove = (state, action) => {
  return Object.assign({}, state, {
    videos: state.videos.filter(hasDifferentId(action.videoId))}
  );
};

const handleAdd = (state, action) => {
  if (isInPlaylist(state.videos, action.video.id.videoId)) {
    return state;
  } else {
    return Object.assign({}, state, {videos: [...state.videos, action.video]});
  }
};

const handlePlayNext = state => {
  const videoIds = state.videos.map(video => video.id.videoId);
  const currentVideoIndex = videoIds.indexOf(state.currentVideoId);

  let nextVideoId;
  if (currentVideoIndex === state.videos.length - 1) {
    nextVideoId = videoIds[0];
  } else {
    nextVideoId = videoIds[currentVideoIndex + 1];
  }

  return Object.assign({}, state, {currentVideoId: nextVideoId});
};

const handleUpdateCurrentVideoId = (state, action) => {
  return Object.assign({}, state, {currentVideoId: action.newVideoId});
};

const initialState = {
  currentVideoId: null,
  videos: []
};

export default function playlist(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_PLAYLIST:
      return handleAdd(state, action);
      break;
    case types.REMOVE_FROM_PLAYLIST:
      return handleRemove(state, action);
      break;
    case types.NEXT_VIDEO_FROM_PLAYLIST:
      return handlePlayNext(state);
      break;
    case types.UPDATE_CURRENT_VIDEO_ID:
      return handleUpdateCurrentVideoId(state, action);
      break;
    default:
      return state;
  }
}
