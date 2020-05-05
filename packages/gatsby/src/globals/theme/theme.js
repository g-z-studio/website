import { colorPalette, neutralsPalette, semanticPalette } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { timing } from "./timing";

export const theme = {
  ...colorPalette,
  ...neutralsPalette,
  ...semanticPalette,
  ...typography,
  ...timing,
  spacing,
  borderRadius: spacing.S,
};
