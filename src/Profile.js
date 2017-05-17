import React from 'react';

const styles = {
	containerStyles: {
		display: "block",
		color: "#484848",
		fontFamily: "Helvetica",
		textAlign: "center",
	},
	imageStyles: {
		height: "250px",
		width: "250px",
	},
	nameStyles: {
		fontSize: "22px",
	},
	schoolStyles: {
		fontSize: "16px",
		fontWeight: "200",
	},
};

export default function Profile(props) {
	return (
		<div style={styles.containerStyles}>
			<img
				style={styles.imageStyles}
				src="/images/brianchesky.jpg"
				alt={"Image of " + props.name}
			/>
			<h3 style={styles.nameStyles}>{props.name}</h3>
			<h4 style={styles.schoolStyles}>{props.school}</h4>
		</div>
	)
}
