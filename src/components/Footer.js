import React from 'react'
import styled from 'styled-components'

import logo from '../logo.svg';
import Social from './Social';

const Footer = ( props ) => {

	const social = [
		{
			name: 'Facebook',
			url: 'https://www.facebook.com',
			path: 'https://image.flaticon.com/icons/svg/145/145802.svg'
		},
		{
			name: 'Twitter',
			url: 'https://www.twitter.com',
			path: 'https://image.flaticon.com/icons/svg/145/145812.svg'
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com',
			path: 'https://image.flaticon.com/icons/svg/145/145805.svg'
		}
	]

	const FooterContainer = styled.div`
		display: flex;
		justify-content: space-evenly;
		align-items: center;

		span {
			max-width: 50px;
			img {
				max-width: 100%;
			}
		}

		li {
			list-style: none;
			display: inline-block;
			margin-left: 25px;
			img {
				width: 25px;
			}
		}

	`

	return(
		<FooterContainer>
			<span>
				<img src={logo} alt="logo" />
			</span>
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
		</FooterContainer>
	)
}

export default Footer