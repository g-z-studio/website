import { colorPalette, brandPalette, neutralsPalette, semanticPalette } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { timing } from "./timing";
import { devices } from "./devices";

export const theme = {
  ...colorPalette,
  ...brandPalette,
  ...neutralsPalette,
  ...semanticPalette,
  ...typography,
  ...timing,
  ...devices,
  spacing,
  borderRadius: spacing.S,
};
