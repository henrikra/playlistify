import { expect } from 'chai';

import reducer from '../src/reducers/playlist';
import types from '../src/constants/ActionTypes';

describe('Playlist reducer', () => {
  const action = {
    type: types.ADD_TO_PLAYLIST,
    video: {title: 'New video'}
  };

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).to.eql([]);
  });

  it('handles ADD_TO_PLAYLIST', () => {
    expect(reducer(undefined, action)).to.eql([{title: 'New video'}]);
  });

  it('handles ADD_TO_PLAYLIST with already initialized state', () => {
    const initialState = [{title: 'This video is already in playlist'}];
    expect(reducer(initialState, action)).to.eql([
      {title: 'This video is already in playlist'},
      {title: 'New video'}
    ]);
  });
});
