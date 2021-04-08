import { AppProps } from 'next/app';
import React, { FunctionComponent } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #161D25;
    --background_100: #0F1219; // Header
    --background_200: #1D2631;
    --text: #fff;
    --accent: #1C94EB
  }

  html, body {
    font-family: 'Operator Mono', 'dm', monospace;
    padding: 0;
    margin: 0;
    background: var(--background);
    color: var(--text);
  }
`;

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
  	<>
      <GlobalStyle />
      <Component {...pageProps} />
  	</>
  );
};

export default App;
