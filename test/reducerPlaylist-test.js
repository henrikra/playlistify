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
      const expectedState = {currentVideoId: null, videos: []};

      expect(reducer(undefined, {})).to.eql(expectedState);
    });

    it('adds video to empty playlist', () => {
      const expectedState = {
        currentVideoId: null,
        videos: [{id: {videoId: 'superId1'}}]
      };

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
      const initialState = {videos: []};
      
      expect(reducer(initialState, action)).to.eql(initialState);
    });
  });

  describe('PLAY_NEXT', () => {
    const action = {type: types.PLAY_NEXT};

    it('sets next video in playlist to be currently playing', () => {
      const initialState = {
        currentVideoId: 'thisIsNowPlaying',
        videos: [
          {id: {videoId: 'thisIsNowPlaying'}},
          {id: {videoId: 'playThisNext'}}
        ]
      };
      const expectedState = {
        currentVideoId: 'playThisNext',
        videos: [
          {id: {videoId: 'thisIsNowPlaying'}},
          {id: {videoId: 'playThisNext'}}
        ]
      };

      expect(reducer(initialState, action)).to.eql(expectedState);
    });

    it('sets same video as currentVideoId when one video in playlist', () => {
      const initialState = {
        currentVideoId: 'thisIsNowPlaying',
        videos: [{id: {videoId: 'thisIsNowPlaying'}}]
      };
      const expectedState = {
        currentVideoId: 'thisIsNowPlaying',
        videos: [{id: {videoId: 'thisIsNowPlaying'}}]
      };

      expect(reducer(initialState, action)).to.eql(expectedState);
    });

    it('sets first video as currentVideoId if last video in playlist is playing', () => {
      const initialState = {
        currentVideoId: 'thisIsNowPlaying',
        videos: [
          {id: {videoId: 'playThisNext'}},
          {id: {videoId: 'thisIsNowPlaying'}}
        ]
      };
      const expectedState = {
        currentVideoId: 'playThisNext',
        videos: [
          {id: {videoId: 'playThisNext'}},
          {id: {videoId: 'thisIsNowPlaying'}}
        ]
      };

      expect(reducer(initialState, action)).to.eql(expectedState);
    });
  });
});
