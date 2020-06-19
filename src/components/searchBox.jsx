import React from 'react';

export const SearchBox = (props) => {
  return (
    <input
      className="search-query"
      type="text"
      placeholder="City or State"
      size="100"
      value={props.query}
      onChange={(e) => {
        props.onType(e.target.value);
      }}
    />
  );
};
