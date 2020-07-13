import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
  }

  html,body, :root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    background: var(--primary);
  }

  :root {
    --primary: #191919;
    --secondary: #282828;
    --third: #444;
    --red: #f00;
    --gray: rgba(40, 40, 40, .8);
    --highlighted: #2c8ed6;
    --content: #aaa;
  }
`;
