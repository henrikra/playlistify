import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeVideoFromPlaylist } from '../actions';

export class PlaylistItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.removeVideoFromPlaylist(this.props.playlistItem.id.videoId);
  }

  render() {
    const { playlistItem } = this.props;

    return (
      <li>
        {playlistItem.snippet.title}
        <button onClick={this.handleClick}>-</button>
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removeVideoFromPlaylist}, dispatch);
}

export default connect(null, mapDispatchToProps)(PlaylistItem);
