import React from 'react'
import logo from '../logo.svg';

import Social from './Social';

const Footer = ( props ) => {

	const social = [
		{
			name: 'Facebook',
			url: 'https://www.facebook.com',
			path: '/images/facebook.png'
		},
		{
			name: 'Twitter',
			url: 'https://www.twitter.com',
			path: '/images/twitter.png'
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com',
			path: '/images/instagram.png'
		}
	]

	return(
		<div>
			<img src={logo} className="App-logo" alt="logo" />
			<ul>
				{
					social.map( (item, key) => (
						<li key={key}>
							{console.log(item.name)}
							<Social
								src={item.path}
								className={item.name}
								alt={item.name}
							/>
						</li>
					) )
				}
			</ul>
			<div className="copyrights">Hecho por Alfredo Navas</div>
		</div>
	)
}

export default Footer