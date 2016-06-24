import types from '../constants/ActionTypes';

export default function searchResults(state = [], action) {
  switch (action.type) {
    case types.SEARCH_VIDEOS:
      return action.videos;
      break;
    default:
      return state;
  }
}
