import React, { Component } from 'react';

export default class SearchResult extends Component {
  render() {
    const { searchResult } = this.props;

    return (
      <li>
        {searchResult.title}
      </li>
    );
  }
}
