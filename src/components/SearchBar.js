import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchVideos } from '../actions';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {searchTerm: ''};
  }

  onInputChange(e) {
    this.setState({searchTerm: e.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchVideos(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.onInputChange} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
