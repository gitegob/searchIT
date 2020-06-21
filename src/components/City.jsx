import React from 'react';

export const City = ({ city }) => {
  return (
    <div className="search-results">
      <div className="row">
        <span className="label" id="city-label">
          City:{' '}
        </span>
        <div className="data" id="city">
          {city.city}
        </div>
      </div>
      <div className="row">
        <span className="label" id="state-label">
          State:{' '}
        </span>
        <div className="data" id="state">
          {city.state}
        </div>
      </div>
      <div className="row">
        <span className="label" id="pop-label">
          Population:{' '}
        </span>
        <div className="data" id="population">
          {city.population.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
        </div>
      </div>
      <div className="row">
        <span className="label" id="growth-label">
          Growth Percentage:{' '}
        </span>
        <div
          className={
            parseFloat(city.growth_from_2000_to_2013.split('%')[0]) > 0 ? 'data plus' : 'data minus'
          }
          id="growth"
        >
          {city.growth_from_2000_to_2013}
        </div>
      </div>
    </div>
  );
};
