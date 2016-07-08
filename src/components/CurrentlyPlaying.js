import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CurrentlyPlaying extends Component {
  render() {
    const { playlist } = this.props;

    if (!playlist.currentVideo) {
      return null;
    }

    return (
      <div>
        <div>{playlist.currentVideo.snippet.title}</div>
        <div>{playlist.currentVideo.snippet.channelTitle}</div>
      </div>
    );
  }
}

function mapStateToProps({ playlist }) {
  return {playlist};
}

export default connect(mapStateToProps)(CurrentlyPlaying);
