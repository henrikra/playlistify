import { expect } from 'chai';

import reducer from '../src/reducers/playlist';
import types from '../src/constants/ActionTypes';

describe('Playlist reducer', () => {

  describe('ADD_TO_PLAYLIST', () => {
    const action = {
      type: types.ADD_TO_PLAYLIST,
      video: {id: {videoId: 'superId1'}}
    };

    it('returns the initial state', () => {
      expect(reducer(undefined, {})).to.eql([]);
    });

    it('adds video to empty playlist', () => {
      expect(reducer(undefined, action)).to.eql([{id: {videoId: 'superId1'}}]);
    });

    it('adds video to already initialized playlist', () => {
      const initialState = [{id: {videoId: 'idWhichWasAlreadyInPlaylist'}}];
      expect(reducer(initialState, action)).to.eql([
        {id: {videoId: 'idWhichWasAlreadyInPlaylist'}},
        {id: {videoId: 'superId1'}}
      ]);
    });
  });

  describe('REMOVE_FROM_PLAYLIST', () => {
    const action = {
      type: types.REMOVE_FROM_PLAYLIST,
      videoId: 'superId2'
    };

    it('removes video from playlist', () => {
      const initialState = [
        {id: {videoId: 'superId1'}},
        {id: {videoId: 'superId2'}},
        {id: {videoId: 'superId3'}}
      ];
      const expectedState = [
        {id: {videoId: 'superId1'}},
        {id: {videoId: 'superId3'}}
      ];

      expect(reducer(initialState, action)).to.eql(expectedState);
    });

    it('return playlist as it was when playlist is empty', () => {
      expect(reducer(undefined, action)).to.eql([]);
    });
  });
});
