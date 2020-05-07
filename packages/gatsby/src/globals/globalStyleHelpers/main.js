import { theme } from "../theme";

export const main = `
  html {
    font-family: AkkuratStd, Arial, Helvetica, sans-serif;
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

  h1, h2 {
    font-family: Halvar, Arial, Helvetica, sans-serif;
  }
  h1 {
    font-size: ${theme.heading1.fontSize};
    line-height: ${theme.heading1.lineHeight};
    overflow-wrap: break-word;
  }
`;
