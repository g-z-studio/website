import akkuratStdRegular from "../../static/fonts/Akkurat/AkkuratStd-Regular.ttf";
import akkuratStdBold from "../../static/fonts/Akkurat/AkkuratStd-Bold.ttf";

import halvarBold from "../../static/fonts/Halvar Breitschrift/HalvarBreitschriftBold.ttf";

import gtHaptikMedium from "../../static/fonts/GT Haptik Web Medium/gt-haptik-medium-web.woff";
import gtHaptikMediumRotalic from "../../static/fonts/GT Haptik Web Medium/gt-haptik-medium-rotalic-web.woff";
import gtHaptikRegular from "../../static/fonts/GT Haptik Web Regular/gt-haptik-web.woff";
import gtHaptikRegularRotalic from "../../static/fonts/GT Haptik Web Regular/gt-haptik-rotalic-web.woff";

import bcFalsterGroteskRegular from "../../static/fonts/BCFalsterGrotesk/BCFalsterGrotesk-Regular.otf";
import bcFalsterGroteskItalic from "../../static/fonts/BCFalsterGrotesk/BCFalsterGrotesk-Italic.otf";
import bcFalsterGroteskLight from "../../static/fonts/BCFalsterGrotesk/BCFalsterGrotesk-Light.otf";
import bcFalsterGroteskLightItalic from "../../static/fonts/BCFalsterGrotesk/BCFalsterGrotesk-LightItalic.otf";
import bcFalsterGroteskMedium from "../../static/fonts/BCFalsterGrotesk/BCFalsterGrotesk-Medium.otf";
import bcFalsterGroteskMediumItalic from "../../static/fonts/BCFalsterGrotesk/BCFalsterGrotesk-MediumItalic.otf";
import bcFalsterGroteskBold from "../../static/fonts/BCFalsterGrotesk/BCFalsterGrotesk-Bold.otf";
import bcFalsterGroteskBoldItalic from "../../static/fonts/BCFalsterGrotesk/BCFalsterGrotesk-BoldItalic.otf";

// Upgrade : Générer programatiquement une font-face de façon fonctionnelle ? ...
// Permettrait de tirer la valeur de font-family depuis le thème
// generateFontFace(fontFamily, src, formatOf(src))
// RegExp/string processing sur le nom du fichier pour determiner font-weight et font-style ?...
// + éventuellement script fs pour scanner static/fonts et renvoyer un array de src
// >> generateFontFaceFamily(fontFamily, [src])

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
