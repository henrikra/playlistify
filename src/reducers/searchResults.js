import types from '../constants/ActionTypes';

export default function searchResults(state = [], action) {
  switch (action.type) {
    case types.FETCH_SEARCH_RESULTS:
      return action.videos;
      break;
    default:
      return state;
  }
}
