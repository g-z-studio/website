import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";

export const CustomGlobalStyle = createGlobalStyle`
  ${({ fontFace }) => fontFace}
  html {
    overflow-x: hidden;
    position: relative;

    -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS. */

  }
  body{
    margin: 0;
    overflow-x: hidden;
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