import { combineReducers } from 'redux';

import searchResultsReducer from './searchResults';

const rootReducer = combineReducers({
  searchResults: searchResultsReducer
});

export default rootReducer;
