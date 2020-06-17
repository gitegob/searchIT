import React, { Component } from 'react';
import NavBar from '../src/components/navBar';
import Container from '../src/components/container';
import '../src/App.css';

class App extends Component {
  state = {
    cities: [],
    results: [],
  };
  componentDidMount = () => {
    const dataUrl =
      'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    fetch(dataUrl)
      .then((resp) => resp.json())
      .then((results) => {
        this.setState({
          cities: results,
        });
      });
  };
  handleSearch = (query) => {
    const { cities } = this.state;
    const filter = query
      .toUpperCase()
      .replace(/\s+/g, ' ') //REMOVING EXTRA SPACES
      .trim();
    const results = [];

    cities.map((c) => {
      const city = c.city.toUpperCase();
      const state = c.state.toUpperCase();
      if (city.indexOf(filter) > -1 || state.indexOf(filter) > -1) {
        results.push(c);
      }
      return null;
    });

    this.setState({ results: results });
  };

  render() {
    return (
      <>
        <NavBar onSearch={this.handleSearch} />
        <Container cities={this.state.results} />
      </>
    );
  }
}

export default App;
