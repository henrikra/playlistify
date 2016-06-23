import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <input type="submit" value="Search" />
      </div>
    );
  }
}
