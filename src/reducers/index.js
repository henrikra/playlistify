import { combineReducers } from 'redux';

import searchResultsReducer from './searchResults';
import playlistReducer from './playlist';

const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  playlist: playlistReducer
});

export default rootReducer;
