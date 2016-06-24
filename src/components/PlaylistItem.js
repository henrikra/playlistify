import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeVideoFromPlaylist, playVideo } from '../actions';

export class PlaylistItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.isCurrentlyPlaying = this.isCurrentlyPlaying.bind(this);
  }

  handleClick() {
    this.props.removeVideoFromPlaylist(this.props.playlistItem.id.videoId);
  }

  handlePlayClick() {
    this.props.playVideo(this.props.playlistItem.id.videoId);
  }

  isCurrentlyPlaying() {
    const { playlistItem, videoPlayer } = this.props;
    return videoPlayer.isPlaying && videoPlayer.videoId === playlistItem.id.videoId;
  }

  render() {
    const { playlistItem } = this.props;
    return (
      <li>
        {playlistItem.snippet.title}
        <button onClick={this.handleClick}>-</button>
        <button onClick={this.handlePlayClick}>
          {this.isCurrentlyPlaying() ? 'Pause' : 'Play'}
        </button>
      </li>
    );
  }
}

function mapStateToProps({ videoPlayer }) {
  return {videoPlayer};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removeVideoFromPlaylist, playVideo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistItem);
