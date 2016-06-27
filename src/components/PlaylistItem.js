import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from './Icon';

import {
  removeFromPlaylist,
  updateCurrentVideoId,
  playVideoPlayer,
  pauseVideoPlayer
} from '../actions';

export class PlaylistItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.isCurrentlyPlaying = this.isCurrentlyPlaying.bind(this);
  }

  handleRemoveClick() {
    this.props.removeFromPlaylist(this.props.playlistItem.id.videoId);
  }

  handlePlayClick() {
    this.props.updateCurrentVideoId(this.props.playlistItem.id.videoId);
    this.props.playVideoPlayer();
  }

  handlePauseClick() {
    this.props.pauseVideoPlayer();
  }

  isCurrentlyPlaying() {
    const { playlistItem, playlist, videoPlayer } = this.props;
    return videoPlayer.isPlaying && playlist.currentVideoId === playlistItem.id.videoId;
  }

  render() {
    const { playlistItem } = this.props;
    return (
      <li>
        <button onClick={this.isCurrentlyPlaying() ? this.handlePauseClick : this.handlePlayClick}>
          {this.isCurrentlyPlaying() ? <Icon icon="fa-pause" /> : <Icon icon="fa-play" />}
        </button>
        {playlistItem.snippet.title}
        <button onClick={this.handleRemoveClick}>-</button>
      </li>
    );
  }
}

function mapStateToProps({ videoPlayer, playlist }) {
  return {videoPlayer, playlist};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    removeFromPlaylist,
    updateCurrentVideoId,
    playVideoPlayer,
    pauseVideoPlayer
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistItem);
