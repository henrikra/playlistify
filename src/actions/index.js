import types from '../constants/ActionTypes';

export function searchVideos(searchTerm) {
  return {
    type: types.SEARCH_VIDEOS,
    searchTerm
  };
}
