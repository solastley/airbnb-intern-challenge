import React from 'react';
import StartButton from './StartButton.js';

export default function Intro({handleClick}) {
	return (
		<div>
			<p>Air[tbd] Two truths and a lie</p>
			<StartButton
				onClick={() => handleClick()}
				text="Start"
			/>
		</div>
	);
}
