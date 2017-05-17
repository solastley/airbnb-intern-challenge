import React, { Component } from 'react';
import '../node_modules/normalize.css/normalize.css';
import Intro from './Intro';
import Card from './Card';
import Progress from './Progress'
import Button from './Button';
import cardData from '../data/data.json';

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
      cardIndex: 0,
			correct: 0,
			wrong: 0,
    }
  }

  startGame = () => {
    this.setState({
      hasStarted: true,
    });
  }

	nextCard = () => {
		console.log("Click!");
		this.setState((prevState) => {
			return {cardIndex: (prevState.cardIndex + 1)};
		});
	}

	makeName(first, last) {
		return first + " " + last;
	}

  render() {
		const {correct, wrong} = this.state
		var currCard = cardData[this.state.cardIndex];

		return (
			<div style={styles}>
			{
				this.state.hasStarted ?
					<div>
						<Card
							name={this.makeName(currCard.firstName, currCard.lastName)}
							school={currCard.school}
							gameData={currCard.facts}
						/>
						<Progress good={correct} bad={wrong} total={cardData.length}/>
						<Button
							text="Next"
							onClick={this.nextCard}
						/>
					</div>
				: <Intro handleClick={this.startGame}/>
			}
			</div>
		)
  }
}
