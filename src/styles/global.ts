import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Monda';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/monda-v16-latin/monda-v16-latin-regular.woff2') format('woff2');
  }

  :root {
    --background-color: #181824;
    --text-color: #f5f5f5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: 'Monda', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle
