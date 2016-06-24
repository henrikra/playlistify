import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { SearchResults } from '../src/components/SearchResults';

describe('SearchResults', () => {
  const minimumProps = {
    searchResults: []
  };

  it('renders three list items', () => {
    const props = {
      searchResults: [
        {etag: '', snippet: {title: ''}},
        {etag: '', snippet: {title: ''}},
        {etag: '', snippet: {title: ''}}
      ]
    };

    const wrapper = shallow(<SearchResults {...props} />);
    expect(wrapper.find('li')).to.have.length(3);
  });

  it('does not render list items with empty searchResults', () => {
    const wrapper = shallow(<SearchResults {...minimumProps} />);
    expect(wrapper.find('li')).to.have.length(0);
  });
});
