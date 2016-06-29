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

  isCurrentVideo() {
    const { playlistItem, playlist } = this.props;
    return playlist.currentVideoId === playlistItem.id.videoId;
  }

  render() {
    const { playlistItem } = this.props;
    let classes = 'playlist-item';

    if (this.isCurrentVideo()) {
      classes += ' playlist-item--active';
    }

    return (
      <li className={classes}>
        <div className="playlist-item__play-control">
          <button className="playlist-item__button" onClick={this.isCurrentlyPlaying() ? this.handlePauseClick : this.handlePlayClick}>
            {this.isCurrentlyPlaying() ? <Icon icon="fa-pause" /> : <Icon icon="fa-play" />}
          </button>
        </div>
        <div className="playlist-item__info">
          <div className="playlist-item__title">
            {playlistItem.snippet.title}
          </div>
          <div className="playlist-item__channel-title">
            {playlistItem.snippet.channelTitle}
          </div>
        </div>
        <div className="playlist-item__actions">
          <button className="playlist-item__action-button" onClick={this.handleRemoveClick}>
            <Icon icon="fa-minus" />
          </button>
        </div>
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
