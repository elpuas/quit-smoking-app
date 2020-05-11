import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, theme } from '../styles/Theme';
import { GlobalStyles } from '../styles/Global';

const AppContainer = styled.div`
	max-width: 800px;
	margin: 0 auto;
	overflow:hidden;
	position: relative;
	height: 100vh;
`;

const Layout = ({children}) => (
	<ThemeProvider theme={lightTheme}>
		<>
			<GlobalStyles />
			<AppContainer>
				{children}
			</AppContainer>
		</>
	</ThemeProvider>
);

export default Layout