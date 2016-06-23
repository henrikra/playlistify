import { expect } from 'chai';

import { searchYouTube } from '../src/utils/youtube';

describe('YouTube util', () => {
  it('gets 20 search results with general search term', () => {
    searchYouTube('music', videos => {
      expect(videos).to.have.length(20);
    });
  });
});
