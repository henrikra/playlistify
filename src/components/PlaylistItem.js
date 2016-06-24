import React, { Component } from 'react';

export default class PlaylistItem extends Component {
  render() {
    const { playlistItem } = this.props;

    return (
      <li>
        {playlistItem.snippet.title}
      </li>
    );
  }
}
