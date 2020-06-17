import React, { Component } from 'react';
import logo from '../../src/favicon.ico';

class NavBar extends Component {
  state = {
    query: '',
  };

  render() {
    return (
      <nav className="header">
        <img className="logo" src={logo} alt="logo" srcset="" />
        <div className="searchit-label">searchIT</div>
        <input
          className="search-query"
          type="text"
          placeholder="City or State"
          size="100"
          onChange={(e) => {
            this.setState({ query: e.target.value });
          }}
        />
        <button
          onClick={() => this.props.onSearch(this.state.query)}
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
