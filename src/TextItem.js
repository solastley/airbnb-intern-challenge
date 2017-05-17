import React from 'react'

const styles = {
	fontFamily: 'Helvetica',
	fontSize: '0.9rem',
	padding: '1.2rem',
	border: '1px solid #717171',
	borderRadius: '0.125rem',
	marginBottom: '1rem',
}

export default ({selected, green, red, children}) => (
	<span style={styles}>{ children }</span>
)
