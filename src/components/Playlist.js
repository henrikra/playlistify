import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Playlist extends Component {
  render() {
    const playlistItems = this.props.playlist.map((playlistItem, index) => {
      return <li key={index}>{playlistItem.title}</li>;
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
