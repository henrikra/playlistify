import types from '../constants/ActionTypes';

const filterByIdInversed = videoId => {
  return video => video.id.videoId !== videoId;
};

const filterById = videoId => {
  return video => video.id.videoId === videoId;
};

const isAlreadyInPlaylist = (playlist, newVideoId) => {
  return playlist.filter(filterById(newVideoId)).length;
};

const handleRemove = (state, action) => {
  return Object.assign({}, state, {
    videos: state.videos.filter(filterByIdInversed(action.videoId))}
  );
};

const handleAdd = (state, action) => {
  if (isAlreadyInPlaylist(state.videos, action.video.id.videoId)) {
    return state;
  } else {
    return Object.assign({}, state, {videos: [...state.videos, action.video] });
  }
};

const handleAddVideoToPlayer = (state, action) => {
  return Object.assign({}, state, {currentlyPlaying: action.videoId});
};

const handlePlayNext = state => {
  const videoIds = state.videos.map(video => video.id.videoId);
  const currentVideoIndex = videoIds.indexOf(state.currentlyPlaying);

  let nextVideoId;
  if (currentVideoIndex === state.videos.length - 1) {
    nextVideoId = videoIds[0];
  } else {
    nextVideoId = videoIds[currentVideoIndex + 1];
  }

  return Object.assign({}, state, {currentlyPlaying: nextVideoId});
};

const initialState = {
  currentlyPlaying: null,
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
    case types.ADD_VIDEO_TO_PLAYER:
      return handleAddVideoToPlayer(state, action);
      break;
    case types.PLAY_NEXT:
      return handlePlayNext(state);
      break;
    default:
      return state;
  }
}
