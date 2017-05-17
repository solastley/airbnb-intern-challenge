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

const styles = {
	width: '100vw',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}

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
		return (
			<div style={styles}>
			{
				this.state.hasStarted ?
					<Card
						name="Solomon Astley"
						avatar="../public/images/SolomonAstley.png"
						gameData={gameData}
					/>
				: <Intro handleClick={this.startGame}/>
			}
			</div>
		)
  }
}
