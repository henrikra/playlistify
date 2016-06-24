import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';

export class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.onReady = this.onReady.bind(this);
    this.state = {player: null};
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.player) {
      if (nextProps.videoPlayer.isPlaying) {
        nextState.player.playVideo();
      } else {
        nextState.player.pauseVideo();
      }
    }
  }

  onReady(e) {
    this.setState({player: e.target});
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId={this.props.videoPlayer.videoId}
        opts={opts}
        onReady={this.onReady}
      />
    );
  }
}

function mapStateToProps({ videoPlayer }) {
  return {videoPlayer};
}

export default connect(mapStateToProps)(VideoPlayer);
