import React from 'react';

const styles = {
	fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important',
	fontSize: '48pt',
	lineHeight: '56px',
	letterSpacing: '-0.8px'
}

const red = {
	color: '#FF5A5F';
}

export default function Title(props) {
	return (
		<div style = styles>
			<h1><span style = red>Air[tbd] <span>Two truths and a Lie</h1>
		</div>
	)
}

