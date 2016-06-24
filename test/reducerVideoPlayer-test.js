import { expect } from 'chai';

import reducer from '../src/reducers/videoPlayer';
import types from '../src/constants/ActionTypes';

describe('Video player reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).to.eql({isPlaying: false});
  });

  it('handles ADD_VIDEO_TO_PLAYER', () => {
    const action = {
      type: types.ADD_VIDEO_TO_PLAYER,
      videoId: 'myVideoId'
    };

    expect(reducer(undefined, action)).to.eql({
      isPlaying: true, videoId: 'myVideoId'
    });
  });

  it('handles PAUSE_PLAYER', () => {
    const action = {type: types.PAUSE_PLAYER};

    expect(reducer(undefined, action)).to.eql({isPlaying: false});
  });
});
