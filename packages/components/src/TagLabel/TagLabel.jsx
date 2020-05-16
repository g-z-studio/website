import React from "react";
import styled from "styled-components";
import { Box } from "@gz-studio/components";

const labelHorizontalSpacing = "0.4rem";
const labelVerticalSpacing = "0.2rem";

export const TagLabel = styled(({ children, className }) => (
  <Box horizontal={labelHorizontalSpacing} className={className}>
    <span>{children}</span>
  </Box>
))`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0;
  margin-top: ${labelVerticalSpacing};
  margin-right: ${labelHorizontalSpacing};

  border: ${({ theme }) => theme.primaryColor.base} solid 1px;
  font-size: ${({ theme }) => theme.fontSize.caption};
`;
