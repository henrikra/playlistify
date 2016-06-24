import types from '../constants/ActionTypes';

export default function searchResults(state = [], action) {
  switch (action.type) {
    case types.SEARCH_VIDEOS:
      return [action.payload.data.items, ...state];
      break;
    default:
      return state;
  }
}
