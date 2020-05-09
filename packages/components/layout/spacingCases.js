import { theme } from "../globals";

export const spacingCases = (spacing) => {
  switch (spacing) {
    case "S":
      return theme.spacing.S;
    case "M":
      return theme.spacing.M;
    case "L":
      return theme.spacing.L;
    case "XL":
      return theme.spacing.XL;
    default:
      return spacing ? spacing : 0;
  }
};
