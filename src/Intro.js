import React from 'react';
import Button from './Button.js';

const styles = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
};

export default function Intro({handleClick}) {
	return (
		<div style={styles}>
			<p>Air[tbd] Two truths and a lie</p>
			<Button
				onClick={() => handleClick()}
				text="Start"
			/>
		</div>
	);
}
