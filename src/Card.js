import React, { Component } from 'react';
import Progress from './Progress'

const styles = {width: '70%'};

export default class Card extends Component {
	render() {
		return (
			<div style={styles}>
				<p>{this.props.name}</p>
				<p>{this.props.school}</p>
			</div>
		);
	}
}
