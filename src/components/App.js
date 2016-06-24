import React, { Component } from 'react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import VideoPlayer from './VideoPlayer';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Playlistify</h1>
        <VideoPlayer />
        <SearchBar />
        <SearchResults />
        <Playlist />
      </div>
    );
  }
}
