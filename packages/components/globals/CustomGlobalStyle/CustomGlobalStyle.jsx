import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";

export const CustomGlobalStyle = createGlobalStyle`
  ${({ fontFace }) => fontFace}

  /* @@@@@@@@@@ Basic default styles reset */
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  :root {
    -moz-tab-size: 4;
    tab-size: 4;
  }
  html {
    position: relative;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;  
    font-family:
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      Helvetica,
      Arial,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji';
   }

  body {
    margin: 0;
  }

  a, b, i, strong, em, small, code {
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent; 
  }

  hr {
    height: 0;
  }
  abbr[title] {
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }


  code,kbd,samp,pre {
    font-family:
      SFMono-Regular,
      Consolas,
      'Liberation Mono',
      Menlo,
      monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }  

  h1, h2, h3, h4, h5, p {
    margin: 0;
  }

  button,input,optgroup,select,textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0;
    border-style: none;
  }
  button,
  select {
    text-transform: none;
    -webkit-tap-highlight-color: transparent;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button,input:focus { outline: none; }
  button, input, select, textarea {font-family: inherit;}
  textarea{resize: none; overflow: auto}

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    padding: 0;
  }
  progress {
    vertical-align: baseline;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield; 
    outline-offset: -2px; 
  }
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }
  
  


  ${({ resetDefault }) => resetDefault}
  ${({ main }) => main}
  ${({ mediaQuery }) => mediaQuery}
  `;

CustomGlobalStyle.propTypes = {
  fontFace: PropTypes.string,
  resetDefault: PropTypes.string,
  main: PropTypes.string,
  mediaQuery: PropTypes.string,
};
