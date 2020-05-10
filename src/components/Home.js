import React from 'react'
import {Link} from 'react-router-dom'

const Home = props => {
	return (
		<div>
			<h1>This is Home</h1>
			<div>
				<h2>My Progress</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra pharetra.</p>
				<Link to='/dashboard'> This User Area</Link>
			</div>
			<div>
				<h2>I want to Quit</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra pharetra.</p>
				<Link to='/register'>Quit Smoking Now!</Link>
			</div>
		</div>
	)
}

export default Home