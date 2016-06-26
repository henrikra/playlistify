import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { SearchResult } from '../../src/components/SearchResult';

describe('SearchResult', () => {
  const minimumProps = {
    searchResult: {
      snippet: {title: 'Video title 1'}
    }
  };

  it('contains video title', () => {
    const wrapper = shallow(<SearchResult {...minimumProps} />);
    expect(wrapper).to.contain.text('Video title 1');
  });
});
