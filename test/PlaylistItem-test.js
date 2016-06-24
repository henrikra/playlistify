import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { PlaylistItem } from '../src/components/PlaylistItem';

describe('PlaylistItem', () => {
  const minimumProps = {
    playlistItem: {
      snippet: {title: 'Video title 1'}
    },
    videoPlayer: {}
  };

  it('contains video title', () => {
    const wrapper = shallow(<PlaylistItem {...minimumProps} />);
    expect(wrapper).to.contain.text(minimumProps.playlistItem.snippet.title);
  });
});
