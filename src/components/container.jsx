import React from 'react';
import { CityCard } from './cityCard';

export const Container = (props) => {
  const { cities } = props;
  return (
    <div className="container" id="container">
      {cities.map((city) => (
        <CityCard
          city={city.city}
          state={city.state}
          population={city.population}
          growth={city.growth_from_2000_to_2013}
          key={cities.indexOf(city)}
        />
      ))}
    </div>
  );
};
