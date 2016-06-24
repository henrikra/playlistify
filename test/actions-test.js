import configureMockStore from 'redux-mock-store';
import { expect } from 'chai';
import thunk from 'redux-thunk';

import * as actions from '../src/actions';
import types from '../src/constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  it('creates SEARCH_VIDEOS when fetching videos has been done', () => {
    const store = mockStore();

    return store.dispatch(actions.fetchVideos())
      .then(() => {
        const action = store.getActions()[0];
        expect(action.type).to.equal(types.SEARCH_VIDEOS);
        expect(action.videos).to.have.length(20);
      });
  });

  it('creates ADD_TO_PLAYLIST action', () => {
    const video = {
      etag: 'testEtag'
    };
    const expectedAction = {
      type: types.ADD_TO_PLAYLIST,
      video: {etag: 'testEtag'}
    };

    expect(actions.addVideoToPlaylist(video)).to.eql(expectedAction);
  });

  it('creates REMOVE_FROM_PLAYLIST action', () => {
    const videoId = 'superVideoId123';
    const expectedAction = {
      type: types.REMOVE_FROM_PLAYLIST,
      videoId
    };

    expect(actions.removeVideoFromPlaylist(videoId)).to.eql(expectedAction);
  });

  it('creates PLAY_VIDEO action', () => {
    const videoId = 'superVideoId123';
    const expectedAction = {
      type: types.PLAY_VIDEO,
      videoId
    };

    expect(actions.playVideo(videoId)).to.eql(expectedAction);
  });
});
