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
      <li className="search-result">
        <div className="search-result__image">
          <div className="search-result__image-overlay">
            {!this.isInPlaylist() && <button className="search-result__add-btn" onClick={this.handleClick}>+</button>}
          </div>
          <img src={searchResult.snippet.thumbnails.medium.url} />
        </div>
        <div className="search-result__content">
          {searchResult.snippet.title}
        </div>
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
