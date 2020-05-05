import akkuratStdRegular from "../fonts/Akkurat/AkkuratStd-Regular.ttf";
import akkuratStdBold from "../fonts/Akkurat/AkkuratStd-Bold.ttf";

import halvarBold from "../fonts/Halvar Breitschrift/HalvarBreitschriftBold.ttf";

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

export const fontFace = `
@font-face {
  @font-face {
    font-family: AkkuratStd;
    src: url(${akkuratStdRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: AkkuratStd;
    src: url(${akkuratStdBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: Halvar;
    src: url(${halvarBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
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
`;
