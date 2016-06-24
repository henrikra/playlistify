import { expect } from 'chai';
import reducer from '../src/reducers/searchResults';
import types from '../src/constants/ActionTypes';

describe('Search results reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).to.eql([]);
  })
});
