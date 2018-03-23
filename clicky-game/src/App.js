import React, { Component } from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron"
import data from "./data.json";


class App extends Component {

  state = {
    score: 0,
    highScore: 0,
    message:"Click to begin",
    data: data
  }

  render() {
    return (
      <div className="App">
        <Nav message={this.state.message} score={this.state.score} highScore={this.state.highScore} />
          <Jumbotron />      
      
      </div>
    );
  }
}

export default App;
