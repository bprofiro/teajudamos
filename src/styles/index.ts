import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html,
  body,
  #__next {
    min-height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Epilogue', sans-serif;
    background: ${theme.colors.bgColor};
    color: #00182C;
  }

  a {
    text-decoration: none;
    color: #48A6FF;
    cursor: pointer;

    transition: filter 0.5s;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
    font-family: 'Epilogue', sans-serif;
  }

  .Toastify {
    font-size: 16px;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    margin-right: 10px;
  }

  ::-webkit-scrollbar-corner {
    border: none;
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #CCD2DB;
    border-radius: 3px;
    cursor: move;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border: none;
  }
`;
