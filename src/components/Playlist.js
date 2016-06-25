import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlaylistItem from './PlaylistItem';

export class Playlist extends Component {
  render() {
    const playlistItems = this.props.playlist.videos.map((playlistItem, index) => {
      return <PlaylistItem key={index} playlistItem={playlistItem} />;
    });

    return (
      <ul>
        {playlistItems}
      </ul>
    );
  }
}

function mapStateToProps({ playlist }) {
  return {playlist};
}

export default connect(mapStateToProps)(Playlist);
