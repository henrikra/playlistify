import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeVideoFromPlaylist, playVideo } from '../actions';

export class PlaylistItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  handleClick() {
    this.props.removeVideoFromPlaylist(this.props.playlistItem.id.videoId);
  }

  handlePlayClick() {
    this.props.playVideo(this.props.playlistItem.id.videoId);
  }

  render() {
    const { playlistItem } = this.props;

    return (
      <li>
        {playlistItem.snippet.title}
        <button onClick={this.handleClick}>-</button>
        <button onClick={this.handlePlayClick}>&gt;</button>
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removeVideoFromPlaylist, playVideo}, dispatch);
}

export default connect(null, mapDispatchToProps)(PlaylistItem);
