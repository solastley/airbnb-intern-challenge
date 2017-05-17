import React from 'react'

const progress = {
	width: '100%',
	height: '3rem',
	display: 'flex',
}

export default ({good, bad, total}) => {
	const goodStyles = {backgroundColor: '#68b7ba', flexGrow: good}
	const badStyles = {backgroundColor: '#757575', flexGrow: bad}
	const restStyles = {backgroundColor: '#fffbfb', flexGrow: total - good - bad}

	return (
		<div style={progress}>
			<div style={goodStyles}/>
			<div style={badStyles}/>
			<div style={restStyles}/>
		</div>
	)
}
