import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { CurrentlyPlaying } from '../../src/components/CurrentlyPlaying';

describe('CurrentlyPlaying', () => {
  const minimumProps = {playlist: {currentVideo: {snippet:
    {title: 'Video title 1', channelTitle: 'pewDewPie'}
  }}};
  const wrapper = shallow(<CurrentlyPlaying {...minimumProps} />);

  it('contains current video title', () => {
    expect(wrapper).to.contain.text('Video title 1');
  });

  it('contains current video channel', () => {
    expect(wrapper).to.contain.text('pewDewPie');
  });
});
