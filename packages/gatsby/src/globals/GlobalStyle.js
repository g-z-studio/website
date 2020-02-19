import React from "react"
import { createGlobalStyle } from "styled-components"

import { theme } from "./theme"

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Tiempos;
    src: url("../fonts/lacrimamg-senzaregular-webfont.woff2");
    font-weight: 300;
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
    height: 100%;

    line-height: 1.15; /* Correct the line height in all browsers. */
    -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS. */
  }
  body {
    margin: 0;
    min-height: 100vh;    
    
    background: ${theme.neutral1};

    #__next {
      min-height: 100vh;    
      display: grid;
      grid-template-rows: 1fr auto;
    }
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
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
`
