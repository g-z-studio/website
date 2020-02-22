import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";
export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Tiempos";
    font-weight: 300;
    src: url("../static/fonts/TiemposTextWeb-Regular.woff") format('woff');
  }
  @font-face {
    font-family: "Tiempos Semibold";
    src: url("../fonts/TiemposTextWeb-Semibold.woff");
    font-weight: 600;
  }
  

  html {
    font-family: Tiempos, Arial, Helvetica, sans-serif;
    color: ${theme.neutral5};
    font-size: ${theme.globals.fontSize};
    /* overflow-x: hidden; */

    line-height: 1.3; /* Correct the line height in all browsers. */
    -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS. */
  }

  body {
    margin: 0;
    background: ${theme.neutral1};
  }


  h1, h2, h3, h4, h5, p {
    margin: 0;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 3rem;
    overflow-wrap: break-word;
  }

  button,input :focus { outline: none; }
  button, input, select, textarea {font-family: inherit;}

  a, b, i, strong, em, small, code {
    color: inherit;
    text-decoration: none;
  }

  .grecaptcha-badge{
    visibility: collapse !important;  
}
`;
