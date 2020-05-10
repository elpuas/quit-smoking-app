import React from 'react'

import Input from './Input'
import Button from './Button'

const Form = props => {
	const consoleLog = () => console.log('Hice Click')

	return(
		<div>
			<form>
				<Input type="text" placeholder="Name" />
				<Input type="email" placeholder="email" />
				<Input type="textarea" placeholder="Why I want to quit" />
				<Button title="Submit" type="submit" onClick={ consoleLog } />
			</form>
		</div>
	)
}

export default Form