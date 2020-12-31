import React from 'react'
import nomatch from '../../resource/assets/Nomatch.jpg'

export default class Nomatch extends React.Component {
	render() {
		return (
			<div >
				<img src={nomatch} alt='' style={{ width: 800, height: 400 }}></img>
			</div>
		)
	}
}

