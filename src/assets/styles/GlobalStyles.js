// src/assets/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 250;
    background-color: #121212;
    color: #ffffff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
