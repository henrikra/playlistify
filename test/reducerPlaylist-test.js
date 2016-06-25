import { expect } from 'chai';

import reducer from '../src/reducers/playlist';
import types from '../src/constants/ActionTypes';

describe('Playlist reducer', () => {

  describe('ADD_TO_PLAYLIST', () => {
    const action = {
      type: types.ADD_TO_PLAYLIST,
      video: {id: {videoId: 'superId1'}}
    };
    const expectedState = {currentlyPlaying: null, videos: []};

    it('returns the initial state', () => {
      expect(reducer(undefined, {})).to.eql(expectedState);
    });

    it('adds video to empty playlist', () => {
      const expectedState = {currentlyPlaying: null, videos: [
        {id: {videoId: 'superId1'}}
      ]};
      expect(reducer(undefined, action)).to.eql(expectedState);
    });

    it('adds video to already initialized playlist', () => {
      const initialState = {videos: [
        {id: {videoId: 'idWhichWasAlreadyInPlaylist'}}
      ]};
      const expectedState = {videos: [
        {id: {videoId: 'idWhichWasAlreadyInPlaylist'}},
        {id: {videoId: 'superId1'}}
      ]};

      expect(reducer(initialState, action)).to.eql(expectedState);
    });

    it('does not add video if it is already in playlist', () => {
      const initialState = {videos: [{id: {videoId: 'superId1'}}]};
      expect(reducer(initialState, action)).to.eql(initialState);
    });
  });

  describe('REMOVE_FROM_PLAYLIST', () => {
    const action = {
      type: types.REMOVE_FROM_PLAYLIST,
      videoId: 'superId2'
    };

    it('removes video from playlist', () => {
      const initialState = {videos: [
        {id: {videoId: 'superId1'}},
        {id: {videoId: 'superId2'}},
        {id: {videoId: 'superId3'}}
      ]};
      const expectedState = {videos: [
        {id: {videoId: 'superId1'}},
        {id: {videoId: 'superId3'}}
      ]};

      expect(reducer(initialState, action)).to.eql(expectedState);
    });

    it('return playlist as it was when playlist is empty', () => {
      const expectedState = {currentlyPlaying: null, videos: []};
      expect(reducer(undefined, action)).to.eql(expectedState);
    });
  });
});
