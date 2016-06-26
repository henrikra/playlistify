import { expect } from 'chai';

import reducer from '../src/reducers/videoPlayer';
import types from '../src/constants/ActionTypes';

describe('Video player reducer', () => {
  it('returns the initial state', () => {
    const expectedState = {isPlaying: false, videos: []};
    expect(reducer(undefined, {})).to.eql(expectedState);
  });

  it('handles ADD_VIDEO_TO_PLAYER', () => {
    const action = {
      type: types.ADD_VIDEO_TO_PLAYER,
      videoId: 'myVideoId'
    };
    const expectedState = {isPlaying: true, videoId: 'myVideoId', videos: []};

    expect(reducer(undefined, action)).to.eql(expectedState);
  });

  it('handles PLAY_VIDEO_PLAYER', () => {
    const action = {type: types.PLAY_VIDEO_PLAYER};
    const initialState = {isPlaying: false};
    const expectedState = {isPlaying: true};

    expect(reducer(initialState, action)).to.eql(expectedState);
  });

  it('handles PAUSE_VIDEO_PLAYER', () => {
    const action = {type: types.PAUSE_VIDEO_PLAYER};
    const initialState = {isPlaying: true};
    const expectedState = {isPlaying: false};

    expect(reducer(initialState, action)).to.eql(expectedState);
  });
});
