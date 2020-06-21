import React from 'react';
import logo from '../../src/favicon.ico';
import { SearchForm } from './SearchForm';

export const NavBar = () => {
  return (
    <nav className="header">
      <img className="logo" src={logo} alt="logo" />
      <div className="searchit-label">searchIT</div>
      <SearchForm />
    </nav>
  );
};
