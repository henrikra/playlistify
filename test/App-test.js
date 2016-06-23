import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../src/components/App';

describe('App', () => {
  it('renders', () => {
    expect(shallow(<App />)).to.exist;
  });
});
