import React, { Component } from 'react';

class SearchBox extends Component {
  state = {};
  render() {
    return (
      <input
        className="search-query"
        type="text"
        placeholder="City or State"
        size="100"
        value={this.props.searchWord === '' ? '' : this.props.searchWord}
        onChange={(e) => {
          this.props.onType(e.target.value);
        }}
      />
    );
  }
}

export default SearchBox;
