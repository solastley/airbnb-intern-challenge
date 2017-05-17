import React, { Component } from 'react';
import '../node_modules/normalize.css/normalize.css';
import Intro from './Intro';

export default class App extends Component {
  startGame() {
    console.log("Click");
  }

  render() {
		return (
			<Intro handleClick={this.startGame}/>
		);
  }
}
