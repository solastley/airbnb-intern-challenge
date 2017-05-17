import React, { Component } from 'react';
import Progress from './Progress';
import Profile from './Profile';

const styles = {width: '70%'};

export default class Card extends Component {
	render() {
		return (
			<div style={styles}>
				<Profile
					name={this.props.name}
					school={this.props.school}
				/>
			</div>
		);
	}
}
