import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToPlaylist } from '../actions';

export class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { addToPlaylist, searchResult } = this.props;
    addToPlaylist(searchResult);
  }

  render() {
    const { searchResult } = this.props;

    return (
      <li>
        {searchResult.snippet.title}
        <button onClick={this.handleClick}>+</button>
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addToPlaylist}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchResult);
