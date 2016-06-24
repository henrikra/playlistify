import { expect } from 'chai';

import reducer from '../src/reducers/playlist';
import types from '../src/constants/ActionTypes';

describe('Playlist reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).to.eql([]);
  });

  it('handles ADD_TO_PLAYLIST', () => {
    const action = {
      type: types.ADD_TO_PLAYLIST,
      video: {title: 'Test title'}
    };

    expect(reducer(undefined, action)).to.eql([{title: 'Test title'}]);
  });
});
