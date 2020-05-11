import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import { Link } from 'react-router-dom'

const handleClick = (event) => {
	event.preventDefault()
	console.log('Hice click')
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0C00EA;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;


const Navigation = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/dashboard">My Account</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/register">Quit Smoking</Link></li>
				<li><Button title="Login" onClick={() => handleClick() } /></li>
			</ul>
		</StyledMenu>
	)
}

export default Navigation