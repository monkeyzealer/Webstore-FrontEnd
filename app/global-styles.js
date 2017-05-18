import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin:0;
    padding:0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  nav a {
    color: white;
  }
  hr {
    height: 0;
    overflow: visible;
    width: 55%;
}
  nav a:hover {
    color: red;
  }

  .Categories button {
    background: #2C3539 !important;
    margin: 0 !important;
    background: white !important;
  }
  .button-submit span {
    color: red !important;
  }
  .button-submit button {
    background: black !important;
  }
}
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
