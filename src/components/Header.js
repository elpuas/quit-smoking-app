import React from 'react'
import logo from '../logo.svg';

import Navigation from './Navigation'

const Header = props => {
	return(
		<div>
			<img src={logo} className="App-logo" alt="logo" />
			<Navigation />
		</div>
	)
}

export default Header