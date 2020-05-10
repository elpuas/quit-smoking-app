import React from 'react'

const Button = props => {
	return(
		<div>
			<button onClick={props.handleClick} type={props.type} >{props.title}</button>
		</div>
	)
}

export default Button