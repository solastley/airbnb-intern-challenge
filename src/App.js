import React, { Component } from 'react';
import '../node_modules/normalize.css/normalize.css';
import Intro from './Intro';
import Card from './Card';

const gameData = [
  {
    text: "I've ridden a horse.",
    isFalse: false
  },
  {
    text: "I've been skydiving.",
    isFalse: false
  },
  {
    text: "I can eat eggs.",
    isFalse: true
  }
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      hasStarted: false,
      cardIndex: 0
    }
  }

  startGame = () => {
    this.setState({
      hasStarted: true
    });
  }

  render() {
    if (!this.state.hasStarted) {
      return <Intro handleClick={this.startGame}/>;
    } else {
      return <Card
        name="Solomon Astley"
        avatar="../public/images/SolomonAstley.png"
        gameData={gameData}
      />;
    }
  }
}
