import React from 'react'
import TextItem from './TextItem'

const styles = {
	display: 'flex',
	flexDirection: 'column',
}

export default ({textItems}) => {
	return <div style={styles}>
		{
			textItems.map (({text, status}) => {
				return <TextItem key={text}>{ text }</TextItem>
			})
		}
	</div>
}
