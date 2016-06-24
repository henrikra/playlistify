import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';

export class VideoPlayer extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640'
    };

    return (
      <YouTube
        videoId={this.props.videoPlayer.videoId}
        opts={opts}
      />
    );
  }
}

function mapStateToProps({ videoPlayer }) {
  return {videoPlayer};
}

export default connect(mapStateToProps)(VideoPlayer);
