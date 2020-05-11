import React from 'react'
import styled from 'styled-components'

const StyledInput =  styled.input`
width: 100%;
min-height: 40px;
background-color: transparent;
border: none;
border-bottom: 4px solid rgba(165,254,203,1);
margin-bottom: 10px;
font-size: 22px;
color: white;

::placeholder {
	color: white;
}
`

const Input = props => {
	return (
		<StyledInput
			type={props.type}
			aria-label={props.labelText}
			aria-required="true"
			onChange={props.onchangeHandler}
			value={props.value}
			name={props.name}
			placeholder={props.placeholder}
		/>
	)
}

export default Input