import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PlaylistItem from './PlaylistItem';

export class Playlist extends Component {
  render() {
    const playlistItems = this.props.playlist.videos.map(playlistItem => {
      return <PlaylistItem key={playlistItem.etag} playlistItem={playlistItem} />;
    });

    return (
      <ReactCSSTransitionGroup
        component="ul"
        className="playlist"
        transitionName="shrink"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        {playlistItems}
      </ReactCSSTransitionGroup>
    );
  }
}

function mapStateToProps({ playlist }) {
  return {playlist};
}

export default connect(mapStateToProps)(Playlist);
