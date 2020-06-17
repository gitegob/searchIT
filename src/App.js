import React, { Component } from 'react';
import '../src/App.css';
import NavBar from '../src/components/navBar';
import Container from '../src/components/container';
import Suggestions from '../src/components/suggestions';

class App extends Component {
  state = {
    cities: [],
    results: [],
    suggestions: [],
    query: '',
    searchWord: '',
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
    this.setState({
      query,
      results: [],
      suggestions: [],
    });
    const results = [];
    this.searchIt(query, results);
    this.setState({ results: results });
    return results;
  };
  handleType = (query) => {
    const suggestions = [];
    this.searchIt(query, suggestions);
    this.setState({
      query,
      results: [],
      suggestions: suggestions.slice(0, 10),
      searchWord: undefined,
    });
  };
  handleClickSuggestion = (query) => {
    this.setState({
      searchWord: query,
    });
    this.handleSearch(query);
  };
  searchIt(query, results) {
    const { cities } = this.state;
    const filter = query
      .toUpperCase()
      .replace(/\s+/g, ' ') //REMOVING EXTRA SPACES
      .trim();

    cities.map((c) => {
      const city = c.city.toUpperCase();
      const state = c.state.toUpperCase();
      if (query !== '') {
        if (city.indexOf(filter) > -1 || state.indexOf(filter) > -1) {
          results.push(c);
        }
      }
      return null;
    });
  }

  render() {
    return (
      <>
        <NavBar
          onSearch={this.handleSearch}
          onType={this.handleType}
          query={this.state.query}
          searchWord={this.state.searchWord}
        />
        <Suggestions
          cities={this.state.suggestions}
          query={this.state.query}
          onClickSuggestion={this.handleClickSuggestion}
        />
        <Container cities={this.state.results} />
      </>
    );
  }
}

export default App;
