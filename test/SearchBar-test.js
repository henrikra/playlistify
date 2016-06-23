import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { SearchBar } from '../src/components/SearchBar';

describe('SearchBar', () => {
  const minimumProps = {fields: {}};
  const wrapper = shallow(<SearchBar {...minimumProps} />);

  it('contains submit button', () => {
    expect(wrapper.find('input[type="submit"]')).to.exist;
  });
});
