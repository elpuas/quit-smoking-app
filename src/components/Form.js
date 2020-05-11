import React, { useState } from 'react'
import styled from 'styled-components'
import Moment from 'react-moment';

import Input from './Input'
import Button from './Button'

const consoleLog = (event) => {
	event.preventDefault()
	console.log('Hice Click')
}

const FormWrapper = styled.form`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;

textarea {
	background:transparent;
	border: 4px solid rgba(165,254,203,1);
	font-size: 20px;
	color: white;
	padding: 10px;
	::placeholder {
		color: white;
	}
}
`



const Form = props => {
	// const dateToFormat = new Date();
	const [date, setDate] = useState('0')

	const setTheDate = (e) => {
		e.preventDefault()
		setDate(<Moment format="DD-MM-YYYY">{new Date()}</Moment>)
	}

	return(
		<div>
			<FormWrapper onSubmit={setTheDate} >
				<Input id="name" type="text" placeholder="Nombre" />
				<Input id="email" type="email" placeholder="Correo Electronico" />
				<p>{date}</p>
				<button onClick={() => setTheDate()}>
					Hoy Deje de Fumar
				</button>
				<textarea id="message" type="textarea" placeholder="Why I want to quit" />
				<Button title="Submit" type="submit" />
			</FormWrapper>
		</div>
	)
}

export default Form