import configureMockStore from 'redux-mock-store';
import { expect } from 'chai';
import thunk from 'redux-thunk';

import * as actions from '../src/actions';
import types from '../src/constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  it('creates SEARCH_VIDEOS when fetching videos has been done', () => {
    const store = mockStore();

    return store.dispatch(actions.fetchVideos())
      .then(() => {
        const action = store.getActions()[0];
        expect(action.type).to.equal(types.SEARCH_VIDEOS);
        expect(action.videos).to.have.length(20);
      });
  })
});
