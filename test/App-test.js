import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import App from '../src/components/App';

describe("App", () => {
  it("renders", () => {
    expect(shallow(<App />).length).toEqual(1);
  });
});
