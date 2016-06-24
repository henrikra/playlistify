import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SearchResults extends Component {
  render() {
    const videos = this.props.searchResults.map(searchResult => {
      return <li key={searchResult.etag}>{searchResult.snippet.title}</li>;
    });
    
    return (
      <ul>
        {videos}
      </ul>
    );
  }
}

function mapStateToProps({ searchResults }) {
  return {searchResults};
}

export default connect(mapStateToProps)(SearchResults);
