import types from '../constants/ActionTypes';

export default function playlist(state = [], action) {
  switch (action.type) {
    case types.ADD_TO_PLAYLIST:
      return [...state, action.video];
      break;
    default:
      return state;
  }
}
