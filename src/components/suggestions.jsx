import React from 'react';

export const Suggestions = (props) => {
  return (
    <div className="suggestion-box">
      {props.cities.map((c, i) => (
        <div
          className="suggestion"
          id={i}
          key={i}
          onClick={(e) => props.onClickSuggestion(e.target.innerText)}
        >
          {c.city}
        </div>
      ))}
    </div>
  );
};
