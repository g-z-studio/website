const tokens = {
  colors: {
    neutral00: "#f2f2f2",
    neutral05: "#ececec",
    neutral10: "#e6e6e6",
    neutral40: "#4c4c4c",
    neutral50: "#262626",
    neutral60: "#1a1a1a",
  },
  fonts: ["Halvar", "GTHaptik", "AkkuratStd, Helvetica, Arial, sans-serif"],
  fontSizes: ["0.8rem", "1rem", "1.25rem", "1.5rem", "2.25rem", "2.5rem"],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  spaces: ["0.625rem", "1.5rem", "4rem", "6rem", "10rem"],
  speeds: ["150ms", "300ms", "600ms"],
  screens: ["400px", "600px", "900px", "1200px"],
};

export const theme = {
  token: { ...tokens },
  primaryColor: {
    base: tokens.colors.neutral60,
    light: tokens.colors.neutral50,
    lighter: tokens.colors.neutral40,
  },
  secondaryColor: {
    base: tokens.colors.neutral00,
    dark: tokens.colors.neutral05,
    darker: tokens.colors.neutral10,
  },
  // semanticColors: {}, // réfléchir aux couleurs sémantiques éventuellement nécessaires à l'UX
  font: {
    brand: tokens.fonts[0],
    heading: tokens.fonts[1],
    ui: tokens.fonts[2],
  },
  fontSize: {
    em: "16px",
    caption: tokens.fontSizes[0],
    paragraph: tokens.fontSizes[1],
    heading4: tokens.fontSizes[2],
    heading3: tokens.fontSizes[3],
    heading2: tokens.fontSizes[4],
    heading1: tokens.fontSizes[5],
  },
  lineHeight: {
    S: 1,
    M: 1.25,
    L: 1.5,
  },
  fontWeight: {
    normal: tokens.fontWeights[3],
    bold: tokens.fontWeights[5],
  },
  spacing: {
    S: tokens.spaces[0],
    M: tokens.spaces[1],
    L: tokens.spaces[2],
    XL: tokens.spaces[3],
    XXL: tokens.spaces[4],
  },
  screen: {
    phoneS: tokens.screens[0],
    phoneM: tokens.screens[1],
    tablet: tokens.screens[2],
    desktop: tokens.screens[30],
  },
  speed: {
    slow: tokens.speeds[2],
    steady: tokens.speeds[1],
    fast: tokens.speeds[0],
  },
};
