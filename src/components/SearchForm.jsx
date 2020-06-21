import React, { useState } from 'react';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  // const handleSubmit =(query)=>{
  //   searchIt(query);
  // }
  return (
    <form>
      <input
        className="search-query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="City or State"
        size="100"
      />

      <input className="search-button" type="submit" value="Search" disabled />
    </form>
  );
};
