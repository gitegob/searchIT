import React, { Component } from 'react';
import StateCard from './cityCard';

class Container extends Component {
  render() {
    const { cities } = this.props;
    return (
      <div className="container" id="container">
        {cities.map((city) => (
          <StateCard
            city={city.city}
            state={city.state}
            population={city.population}
            growth={city.growth_from_2000_to_2013}
            key={cities.indexOf(city)}
          />
        ))}
      </div>
    );
  }
}

export default Container;
