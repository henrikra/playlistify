import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { SearchBar } from '../src/components/SearchBar';

describe('SearchBar', () => {
  const wrapper = shallow(<SearchBar />);

  it('contains submit button', () => {
    expect(wrapper.find('input[type="submit"]')).to.exist;
  });
});
