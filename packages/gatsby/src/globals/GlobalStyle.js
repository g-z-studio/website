import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

import tiemposRegular from "../fonts/TiemposTextWeb-Regular.woff";
import proximaNova from "../fonts/proxima-nova-regular.woff2";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Tiempos;
    font-weight: 300;
    src: url(${tiemposRegular}) format('woff');
  }

  @font-face {
    font-family: ProximaNova;
    font-weight: 300;
    src: url(${proximaNova}) format('woff2');
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
