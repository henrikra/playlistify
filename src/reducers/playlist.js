import _ from 'lodash';

import types from '../constants/ActionTypes';

const hasDifferentId = videoId => {
  return video => video.id.videoId !== videoId;
};

const isInPlaylist = (videos, newVideo) => {
  return _.some(videos, newVideo);
};

const handleRemove = (state, action) => {
  return _.assign({}, state, {
    videos: state.videos.filter(hasDifferentId(action.videoId))
  });
};

const handleAdd = (state, action) => {
  if (isInPlaylist(state.videos, action.video)) {
    return state;
  } else {
    return _.assign({}, state, {videos: [...state.videos, action.video]});;
  }
};

const handlePlayNext = state => {
  const videoIds = _.map(state.videos, 'id.videoId');
  const currentVideoIndex = videoIds.indexOf(state.currentVideoId);

  let nextVideoId;
  if (currentVideoIndex === state.videos.length - 1) {
    nextVideoId = videoIds[0];
  } else {
    nextVideoId = videoIds[currentVideoIndex + 1];
  }

  return _.assign({}, state, {currentVideoId: nextVideoId});
};

const handleUpdateCurrentVideoId = (state, action) => {
  return _.assign({}, state, {currentVideoId: action.newVideoId});
};

const initialState = {
  currentVideoId: null,
  videos: []
};

export default function playlist(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_PLAYLIST:
      return handleAdd(state, action);
    case types.REMOVE_FROM_PLAYLIST:
      return handleRemove(state, action);
    case types.NEXT_VIDEO_FROM_PLAYLIST:
      return handlePlayNext(state);
    case types.UPDATE_CURRENT_VIDEO_ID:
      return handleUpdateCurrentVideoId(state, action);
    default:
      return state;
  }
}
