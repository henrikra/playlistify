import React, { Component } from 'react';

import SearchBar from './SearchBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Playlistify</h1>
        <SearchBar />
      </div>
    );
  }
}
