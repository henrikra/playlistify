import { expect } from 'chai';
import * as actions from '../src/actions';
import types from '../src/constants/ActionTypes';

describe('actions', () => {
  it('creates an action to search videos', () => {
    const searchTerm = 'Body Language';
    const expectedAction = {
      type: types.SEARCH_VIDEOS,
      searchTerm
    };

    expect(actions.searchVideos(searchTerm)).to.eql(expectedAction);
  })
})
