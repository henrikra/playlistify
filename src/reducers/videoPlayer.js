import types from '../constants/ActionTypes';

const initialState = {
  isPlaying: false
};

export default function searchResults(state = initialState, action) {
  switch (action.type) {
    case types.ADD_VIDEO_TO_PLAYER:
      return {isPlaying: true, videoId: action.videoId};
      break;
    default:
      return state;
  }
}
