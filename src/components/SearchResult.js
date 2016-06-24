import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addVideoToPlaylist } from '../actions';

export class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { addVideoToPlaylist, searchResult } = this.props;
    addVideoToPlaylist(searchResult);
  }

  render() {
    const { searchResult } = this.props;

    return (
      <li>
        {searchResult.title}
        <button onClick={this.handleClick}>+</button>
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addVideoToPlaylist}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchResult);
