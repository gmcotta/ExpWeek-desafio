import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    background-color: var(--color-background-primary-light);
  }

  :root {
    --color-text-dark: #212d51;
    --color-text-purple: #624cab;
    --color-background-primary-light: #fafbf9;
  }
`;
