import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CurrentlyPlaying extends Component {
  render() {
    return <p>{this.props.playlist.currentVideo && this.props.playlist.currentVideo.snippet.title}</p>;
  }
}

function mapStateToProps({ playlist }) {
  return {playlist};
}

export default connect(mapStateToProps)(CurrentlyPlaying);
