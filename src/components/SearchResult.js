import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToPlaylist } from '../actions';

export class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.isInPlaylist = this.isInPlaylist.bind(this);
  }

  handleClick() {
    const { addToPlaylist, searchResult } = this.props;
    addToPlaylist(searchResult);
  }

  isInPlaylist() {
    const { playlist, searchResult } = this.props;
    const playlistVideoIds = playlist.videos.map(video => video.id.videoId);

    return playlistVideoIds.includes(searchResult.id.videoId);
  }

  render() {
    const { searchResult } = this.props;

    return (
      <li>
        {searchResult.snippet.title}
        {!this.isInPlaylist() && <button onClick={this.handleClick}>+</button>}
      </li>
    );
  }
}

function mapStateToProps({ playlist }) {
  return {playlist};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addToPlaylist}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
