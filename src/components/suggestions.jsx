import React, { Component } from 'react';

class Suggestions extends Component {
  render() {
    return (
      <div className="suggestion-box">
        {this.props.cities.map((c, i) => (
          <div
            className="suggestion"
            id={i}
            key={i}
            onClick={(e) => this.props.onClickSuggestion(e.target.innerText)}
          >
            {c.city}
          </div>
        ))}
      </div>
    );
  }
}

export default Suggestions;
