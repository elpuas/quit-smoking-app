import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import logo from '../logo.svg';

import Navigation from './Navigation'
import Burger from './Burger'

const HeaderContainer =  styled.div`
display: flex;
`

const Logo = styled.span`
max-width: 100px;

img {
	max-width: 100%;
}

`;

const useOnClickOutside = (ref, handler) => {
	useEffect(() => {
	  const listener = event => {
		if (!ref.current || ref.current.contains(event.target)) {
		  return;
		}
		handler(event);
	  };
	  document.addEventListener('mousedown', listener);
	  return () => {
		document.removeEventListener('mousedown', listener);
	  };
	},
	[ref, handler],
	);
  };

function Header() {
	const [open, setOpen] = useState(false);
	const node = useRef();
  	useOnClickOutside(node, () => setOpen(false));
	return(
		<HeaderContainer>
			<Logo>
				<img src={logo} className="App-logo" alt="logo" />
			</Logo>
			<Burger open={open} setOpen={setOpen} />
			<Navigation open={open} setOpen={setOpen} />
		</HeaderContainer>
	)
}

export default Header