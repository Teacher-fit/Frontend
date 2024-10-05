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
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* 수평 스크롤 숨기기 */
    background-color: #ffffff; 
    color: #000000; 
    width: 100%;
    display: block; /* 기존의 flex나 grid 설정이 있으면 block으로 변경 */
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
