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
    default:
      return state;
  }
}
