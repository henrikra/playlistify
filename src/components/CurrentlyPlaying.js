import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CurrentlyPlaying extends Component {
  render() {
    const { playlist } = this.props;

    if (!playlist.currentVideo) {
      return null;
    }

    return (
      <div className="currently-playing">
        <div className="currently-playing__title">
          {playlist.currentVideo.snippet.title}
        </div>
        <div className="currently-playing__channel-title">
          {playlist.currentVideo.snippet.channelTitle}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ playlist }) {
  return {playlist};
}

export default connect(mapStateToProps)(CurrentlyPlaying);
