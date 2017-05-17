import React from 'react';
import StartButton from './StartButton.js';

const styles = {
	width: '100vw',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}

export default function Intro({handleClick}) {
	return (
		<div style={styles}>
			<p>Air[tbd] Two truths and a lie</p>
			<StartButton
				onClick={() => handleClick()}
				text="Start"
			/>
		</div>
	);
}
