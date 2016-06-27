import React, { Component } from 'react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import VideoPlayer from './VideoPlayer';

require('../../style/style.css');

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="main-content">
          <h1>Playlistify</h1>
          <VideoPlayer />
          <SearchBar />
          <SearchResults />
        </div>
        <div className="sidebar">
          <Playlist />
        </div>
      </div>
    );
  }
}
