import { theme } from "../theme.new";

// Pour récupérer le thème de ThemeProvider, transformer en fonction qui reçoit thème en argument
export const main = `
  html {
    font-family: ${theme.font.ui};
    color: ${theme.primaryColor.base};
    font-size: ${theme.fontSize.em};

    line-height: ${theme.lineHeight.L}; /* Correct the line height in all browsers. */
    -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS. */
  }

  body {
    margin: 0;
    background: ${theme.secondaryColor.base};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
    margin-bottom: 2rem;
  }

  h1,
  h2 {
    font-family: Halvar, Arial, Helvetica, sans-serif;
  }
  h1 {
    font-size: ${theme.fontSize.heading1};
    line-height: ${theme.lineHeight.S};
    overflow-wrap: break-word;
  }
  // .grecaptcha-badge{
  //   visibility: collapse !important;
  // }
`;
