import { ThemeProvider } from "styled-components";
import React from "react";

export const CustomThemeProvider = (props) => {
  const theme = props.theme;
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
