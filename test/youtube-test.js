import { expect } from 'chai';

import { searchYouTube } from '../src/utils/youtube';

describe('YouTube util', () => {
  it('returns 20 results with general search term', () => {
    searchYouTube('music', videos => {
      expect(videos).to.have.length(20);
    });
  });

  it('returns zero results with nonsense search term', () => {
    searchYouTube('thisIsNonsenseSearchTerm', videos => {
      expect(videos).to.be.empty;
    });
  });
});
