import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

export class SearchBar extends Component {
  render() {
    const {
      fields: { searchTerm },
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" {...searchTerm} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default reduxForm({
  form: 'Search',
  fields: ['searchTerm']
})(SearchBar);
