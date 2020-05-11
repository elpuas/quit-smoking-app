import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  h2,
  time {
	font-size: 72px;
	background: -webkit-linear-gradient(#eee, #333);
	background: linear-gradient(45deg, rgba(84,51,255,1) 0%, rgba(32,189,255,1) 35%, rgba(165,254,203,1) 70%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-align:center;
	}
	p,
  li,
  a {
	  color: white;
	  font-size: 22px;
	  line-height: 1.75;
  }

  .quote-container p {
	  font-size: 16px;
	  line-height: 1;
  }

  .quote-container p a {
	  display: none;
  }
  `;
