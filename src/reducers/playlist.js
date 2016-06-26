import types from '../constants/ActionTypes';

const hasDifferentId = videoId => {
  return video => video.id.videoId !== videoId;
};

const hasId = videoId => {
  return video => video.id.videoId === videoId;
};

const isAlreadyInPlaylist = (videos, newVideoId) => {
  return videos.filter(hasId(newVideoId)).length;
};

const handleRemove = (state, action) => {
  return Object.assign({}, state, {
    videos: state.videos.filter(hasDifferentId(action.videoId))}
  );
};

const handleAdd = (state, action) => {
  if (isAlreadyInPlaylist(state.videos, action.video.id.videoId)) {
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
    case types.PLAY_NEXT:
      return handlePlayNext(state);
      break;
    default:
      return state;
  }
}
