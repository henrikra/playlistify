import types from '../constants/ActionTypes';

export default function playlist(state = [], action) {
  switch (action.type) {
    case types.ADD_TO_PLAYLIST:
      return [...state, action.video];
      break;
    case types.REMOVE_FROM_PLAYLIST:
      const filterById = video => video.id.videoId !== action.videoId;
      return state.filter(filterById);
      break;
    default:
      return state;
  }
}
