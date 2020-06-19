import React from 'react';

export const CityCard = (props) => {
  const { city, state, population, growth } = props;
  const growthInt = +growth.split('%')[0];
  return (
    <div className="search-results">
      <div className="row">
        <span className="label" id="city-label">
          City:{' '}
        </span>
        <div className="data" id="city">
          {city}
        </div>
      </div>
      <div className="row">
        <span className="label" id="state-label">
          State:{' '}
        </span>
        <div className="data" id="state">
          {state}
        </div>
      </div>
      <div className="row">
        <span className="label" id="pop-label">
          Population:{' '}
        </span>
        <div className="data" id="population">
          {population.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
        </div>
      </div>
      <div className="row">
        <span className="label" id="growth-label">
          Growth Percentage:{'         '}
        </span>
        <div className={growthInt > 0 ? 'data plus' : 'data minus'} id="growth">
          {growth}
        </div>
      </div>
    </div>
  );
};
