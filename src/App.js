import axios from "axios";

import React, { Component } from "react";

class App extends Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        // initial we just console.log(response) but we need to specify
        // but writing it this way  console.log(response.data.slip.advice); isn't ideal either
        // use object destructuring

        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
