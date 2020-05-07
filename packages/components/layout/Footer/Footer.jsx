import React from "react";
import styled from "styled-components";

import { Box } from "../Box";

import { theme } from "../../globals";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-content: center;

  background: ${theme.neutral4};
  color: ${theme.neutral1};
  > * {
    color: ${theme.neutral1};
  }
`;

export const Footer = ({ children, ...props }) => (
  <StyledFooter {...props}>
    <Box horizontal="M" vertical="L">
      {children}© {new Date().getFullYear()} g.z. studio
    </Box>
  </StyledFooter>
);
