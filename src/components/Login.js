import React, { useState} from 'react'
import styled from 'styled-components'
import firebase from '../firebase'

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
}`

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onChangeHandler = (event) => {
		event.preventDefault();
		console.log(email, password);
	}

	return (
		<form onSubmit={onChangeHandler}>
			<StyledInput
			id="userEmail"
			name="userEmail"
			placeholder="Nombre"
			type="text"
			value={value}
			onChange={(event) => setEmail(event.target.value)}
			/>
			<StyledInput
			id="password"
			name="userPassword"
			placeholder="Contraseña"
			type="password"
			value={value}
			onChange={(event) => setPassword(event.target.value)}
			/>
			<button type="submit"> Login </button>
		</form>
	)
}
 export default Login