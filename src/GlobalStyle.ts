import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root {
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    color-scheme: light;
  }

  body {
    padding: 0;
    background-color: #ffffff; 
    color: #000000; 
  }

  div {
    padding: 0;
    margin: 0;
  }

  button {
    font: inherit;
    outline: none;
    border: none;
    background-color: transparent;
  }

  textarea {
    font: inherit;
    outline: none;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, select {
    font: inherit;
  }
`;

export default GlobalStyle;
