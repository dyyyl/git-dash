import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  &:root {
     /* COLORS */
    --dark-grey: #1a1a1a;
    --light-grey: #fbfbfb;

    /* SIZES */
    --small: 1rem;
    --regular: 1.25rem;
    --large: 2.5rem;
    --extra-large: 3rem;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: Inter, Arial, Helvetica, sans-serif;
    background-color: var(--light-grey);
    margin: 0;
    color: var(--dark-grey);
  }

  h1, h2, h3, p {
    margin: 0;
    letter-spacing: 1px;
    font-weight: 300;
  }

  h1 {
    font-size: var(--extra-large);
    letter-spacing: 4px;
  }

  h2 {
    font-size: var(--large);
  }

  h3 {
    font-size: var(--large);
  }

  p {
    font-size: var(--regular);
    font-weight: 400;
  }

  button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
