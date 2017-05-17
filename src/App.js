import React, { Component } from 'react';
import Intro from './Intro';

export default class App extends Component {
  render() {
		return (
			<Intro handleClick={this.startGame}/>
		);
  }

  startGame() {
    console.log("Click");
  }
}
