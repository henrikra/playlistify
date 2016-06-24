import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { SearchResults } from '../src/components/SearchResults';
import { searchYouTube } from '../src/utils/youtube';

describe('SearchResults', () => {
  const minimumProps = {
    searchResults: [
      {etag: '', snippet: {title: ''}},
      {etag: '', snippet: {title: ''}},
      {etag: '', snippet: {title: ''}}
    ]
  };
  const wrapper = shallow(<SearchResults {...minimumProps} />);

  it('renders right amount of list items', () => {
    expect(wrapper.find('li')).to.have.length(3);
  });
});
