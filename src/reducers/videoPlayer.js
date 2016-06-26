import types from '../constants/ActionTypes';

const initialState = {
  isPlaying: false,
  videos: []
};

export default function searchResults(state = initialState, action) {
  switch (action.type) {
    case types.ADD_VIDEO_TO_PLAYER:
      return Object.assign({}, state, {isPlaying: true, videoId: action.videoId});
      break;
    case types.PAUSE_VIDEO_PLAYER:
      return Object.assign({}, state, {isPlaying: false});
      break;
    default:
      return state;
  }
}
