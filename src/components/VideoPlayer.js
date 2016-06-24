import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { pausePlayer, playVideo } from '../actions';


export class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.onReady = this.onReady.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.getNextVideoId = this.getNextVideoId.bind(this);
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

  getNextVideoId() {
    const { playlist, videoPlayer } = this.props;

    const playlistVideoIds = playlist.map(playlistItem => {
      return playlistItem.id.videoId;
    });

    const currentVideoIndex = playlistVideoIds.indexOf(videoPlayer.videoId);

    let nextVideoId;
    if (currentVideoIndex === playlist.length - 1) {
      nextVideoId = playlistVideoIds[0];
    } else {
      nextVideoId = playlistVideoIds[currentVideoIndex + 1];
    }

    return nextVideoId;
  }

  onEnd() {
    this.props.pausePlayer();
    this.state.player.stopVideo();
    this.props.playVideo(this.getNextVideoId());
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
        onEnd={this.onEnd}
      />
    );
  }
}

function mapStateToProps({ videoPlayer, playlist }) {
  return {videoPlayer, playlist};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({pausePlayer, playVideo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
