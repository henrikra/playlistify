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

export default function playlist(state = [], action) {
  switch (action.type) {
    case types.ADD_TO_PLAYLIST:
      if (isAlreadyInPlaylist(state, action.video.id.videoId)) {
        return state;
      } else {
        return [...state, action.video];
      }
      break;
    case types.REMOVE_FROM_PLAYLIST:
      return state.filter(filterByIdInversed(action.videoId));
      break;
    default:
      return state;
  }
}
