import React, { Component } from 'react';
import Profile from './Profile';
import TextItemGroup from './TextItemGroup'

const styles = {width: '70%'};

export default class Card extends Component {
	render() {
		return (
			<div style={styles}>
				<Profile
					name={this.props.name}
					school={this.props.school}
				/>
				<TextItemGroup textItems={this.props.gameData}/>
			</div>
		);
	}
}
