import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchResult from './SearchResult';

export class SearchResults extends Component {
  render() {
    const videos = this.props.searchResults.map(searchResult => {
      return (
        <SearchResult key={searchResult.etag} searchResult={searchResult} />
      );
    });

    return (
      <ul className="search-results">
        {videos}
      </ul>
    );
  }
}

function mapStateToProps({ searchResults }) {
  return {searchResults};
}

export default connect(mapStateToProps)(SearchResults);
