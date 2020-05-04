import React from 'react'

const Input = props => {
	return (
		<input type={props.type} name={props.name} onChange={props.handleChange} value="value" />
	)
}

export default Input