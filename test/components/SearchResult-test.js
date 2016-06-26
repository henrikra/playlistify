import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { SearchResult } from '../../src/components/SearchResult';

describe('SearchResult', () => {
  const minimumProps = {
    searchResult: {
      id: {videoId: 'id'},
      snippet: {title: 'Video title 1'}
    },
    playlist: {videos: []}
  };

  it('contains video title', () => {
    const wrapper = shallow(<SearchResult {...minimumProps} />);

    expect(wrapper).to.contain.text('Video title 1');
  });

  it('does not have add to playlist button when video is already in playlist', () => {
    const props = Object.assign({}, minimumProps, {
      playlist: {videos: [{id: {videoId: 'id'}}]}
    });
    const wrapper = shallow(<SearchResult {...props} />);

    expect(wrapper.find('button')).to.not.exist;
  });
});
