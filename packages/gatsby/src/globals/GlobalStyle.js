import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

import bcFalsterGroteskRegular from "../fonts/BCFalsterGrotesk/BCFalsterGrotesk-Regular.otf";
import gtHaptikMedium from "../fonts/GT Haptik Web Medium/gt-haptik-medium-web.woff";
import gtHaptikMediumRotalic from "../fonts/GT Haptik Web Medium/gt-haptik-medium-rotalic-web.woff";
import gtHaptikRegular from "../fonts/GT Haptik Web Regular/gt-haptik-web.woff";
import gtHaptikRegularRotalic from "../fonts/GT Haptik Web Regular/gt-haptik-rotalic-web.woff";

import bcFalsterGroteskRegular from "../fonts/BCFalsterGrotesk/BCFalsterGrotesk-Regular.otf";
import bcFalsterGroteskItalic from "../fonts/BCFalsterGrotesk/BCFalsterGrotesk-Italic.otf";
import bcFalsterGroteskLight from "../fonts/BCFalsterGrotesk/BCFalsterGrotesk-Light.otf";
import bcFalsterGroteskLightItalic from "../fonts/BCFalsterGrotesk/BCFalsterGrotesk-LightItalic.otf";
import bcFalsterGroteskMedium from "../fonts/BCFalsterGrotesk/BCFalsterGrotesk-Medium.otf";
import bcFalsterGroteskMediumItalic from "../fonts/BCFalsterGrotesk/BCFalsterGrotesk-MediumItalic.otf";
import bcFalsterGroteskBold from "../fonts/BCFalsterGrotesk/BCFalsterGrotesk-Bold.otf";
import bcFalsterGroteskBoldItalic from "../fonts/BCFalsterGrotesk/BCFalsterGrotesk-BoldItalic.otf";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: GTHaptik;
  src: url(${gtHaptikMedium}) format('woff');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: GTHaptik;
  src: url(${gtHaptikMediumRotalic}) format('woff');
  font-weight: bold;
  font-style: italic;
  }
  @font-face {
    font-family: GTHaptik;
    src: url(${gtHaptikRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: GTHaptik;
    src: url(${gtHaptikRegularRotalic}) format('woff');
    font-weight: normal;
    font-style: italic;
  }


  @font-face {
    font-family: BCFalsterGrotesk;
    src: url(${bcFalsterGroteskRegular}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: BCFalsterGrotesk;
    src: url(${bcFalsterGroteskItalic}) format('opentype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: BCFalsterGrotesk;
    src: url(${bcFalsterGroteskLight}) format('opentype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: BCFalsterGrotesk;
    src: url(${bcFalsterGroteskLightItalic}) format('opentype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: BCFalsterGrotesk;
    src: url(${bcFalsterGroteskMedium}) format('opentype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: BCFalsterGrotesk;
    src: url(${bcFalsterGroteskMediumItalic}) format('opentype');
    font-weight: 500;
    font-style: italic;
  }  
  @font-face {
    font-family: BCFalsterGrotesk;
    src: url(${bcFalsterGroteskBold}) format('opentype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: BCFalsterGrotesk;
    src: url(${bcFalsterGroteskBoldItalic}) format('opentype');
    font-weight: 700;
    font-style: italic;
  }
  
  html {
    font-family: BCFalsterGrotesk, GTHaptik, Arial, Helvetica, sans-serif;
    color: ${theme.neutral5};
    font-size: ${theme.globals.mobile.fontSize};
    /* overflow-x: hidden; */

    line-height: ${theme.globals.mobile.lineHeight}; /* Correct the line height in all browsers. */
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
    font-size: ${theme.heading1.fontSize};
    line-height: ${theme.heading1.lineHeight};
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
