import configureMockStore from 'redux-mock-store';
import { expect } from 'chai';
import thunk from 'redux-thunk';

import * as actions from '../src/actions';
import types from '../src/constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  it('creates FETCH_SEARCH_RESULTS when fetching videos has been done', () => {
    const store = mockStore();

    return store.dispatch(actions.fetchSearchResults())
      .then(() => {
        const action = store.getActions()[0];
        expect(action.type).to.equal(types.FETCH_SEARCH_RESULTS);
        expect(action.searchResults).to.have.length(20);
      });
  });

  it('creates ADD_TO_PLAYLIST action', () => {
    const video = 1;
    const expectedAction = {
      type: types.ADD_TO_PLAYLIST,
      video: 1
    };

    expect(actions.addToPlaylist(video)).to.eql(expectedAction);
  });

  it('creates REMOVE_FROM_PLAYLIST action', () => {
    const videoId = 'superVideoId123';
    const expectedAction = {
      type: types.REMOVE_FROM_PLAYLIST,
      videoId
    };

    expect(actions.removeFromPlaylist(videoId)).to.eql(expectedAction);
  });

  it('creates ADD_VIDEO_TO_PLAYER action', () => {
    const videoId = 'superVideoId123';
    const expectedAction = {
      type: types.ADD_VIDEO_TO_PLAYER,
      videoId
    };

    expect(actions.playVideo(videoId)).to.eql(expectedAction);
  });

  it('creates PAUSE_PLAYER action', () => {
    const expectedAction = {type: types.PAUSE_PLAYER};

    expect(actions.pausePlayer()).to.eql(expectedAction);
  });

  it('creates PLAY_NEXT action', () => {
    const expectedAction = {type: types.PLAY_NEXT};

    expect(actions.playNext()).to.eql(expectedAction);
  });
});
