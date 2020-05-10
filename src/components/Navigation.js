import React from 'react'

import Button from './Button'
import { Link } from 'react-router-dom'

const handleClick = (event) => {
	event.preventDefault()
	console.log('Hice click')
}


const Navigation = ( props ) => {
	return (
		<nav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/dashboard">My Account</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/register">Quit Smoking</Link></li>
				<li><Button title="Login" onClick={ handleClick } /></li>
			</ul>
		</nav>
	)
}

export default Navigation