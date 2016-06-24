import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { PlaylistItem } from '../src/components/PlaylistItem';

describe('PlaylistItem', () => {
  const minimumProps = {
    playlistItem: {
      id: {videoId: 'firstVideoId'},
      snippet: {title: 'Video title 1'}
    },
    videoPlayer: {}
  };

  it('contains video title', () => {
    const wrapper = shallow(<PlaylistItem {...minimumProps} />);
    expect(wrapper).to.contain.text(minimumProps.playlistItem.snippet.title);
  });

  it('shows play button when PlaylistItem is not currently playing', () => {
    const props = Object.assign({}, minimumProps, {
      videoPlayer: {isPlaying: false, videoId: 'myId'}
    });
    const wrapper = shallow(<PlaylistItem {...props} />);

    expect(wrapper).to.contain.text('Play');
  });

  it('shows pause button when PlaylistItem is currently playing', () => {
    const props = Object.assign({}, minimumProps, {
      videoPlayer: {isPlaying: true, videoId: 'firstVideoId'}
    });
    const wrapper = shallow(<PlaylistItem {...props} />);

    expect(wrapper).to.contain.text('Pause');
  });
});
