import React from 'react';
import logo from '../../src/favicon.ico';
import { SearchBox } from './searchBox';

export const NavBar = (props) => {
  return (
    <nav className="header">
      <img className="logo" src={logo} alt="logo" />
      <div className="searchit-label">searchIT</div>
      <SearchBox onType={props.onType} searchWord={props.searchWord} />
      <button
        disabled={props.query === '' ? 'disabled' : ''}
        onClick={() => props.onSearch(props.query)}
        type="button"
        className="search-button"
      >
        Search
      </button>
    </nav>
  );
};
