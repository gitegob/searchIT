import React, { Component } from 'react';
import logo from '../../src/favicon.ico';
import SearchBox from './searchBox';

class NavBar extends Component {
  render() {
    return (
      <nav className="header">
        <img className="logo" src={logo} alt="logo" />
        <div className="searchit-label">searchIT</div>
        <SearchBox
          onType={this.props.onType}
          searchWord={this.props.searchWord}
        />
        <button
          onClick={() => this.props.onSearch(this.props.query)}
          type="button"
          className="search-button"
        >
          Search
        </button>
      </nav>
    );
  }
}

export default NavBar;
