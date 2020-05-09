import React from "react";
import styled, { css } from "styled-components";
import { Box } from "@gz-studio/components";

const labelHorizontalSpacing = "0.4rem";
// const labelVerticalSpacing = "0.1rem";

export const GridTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.heading1};
`;
export const CatLabel = styled(({ children, className }) => (
  <Box horizontal={labelHorizontalSpacing} className={className}>
    <h4>{children}</h4>
  </Box>
))`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0;
  margin-right: ${labelHorizontalSpacing};

  background: ${({ theme }) => theme.primaryColor.base};
  color: ${({ theme }) => theme.secondaryColor.base};
  border: ${({ theme }) => theme.primaryColor.base} solid 1px;
  font-size: ${({ theme }) => theme.fontSize.caption};
`;

export const TagLabel = styled(({ children, className }) => (
  <Box horizontal={labelHorizontalSpacing} className={className}>
    <h5>{children}</h5>
  </Box>
))`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0;
  margin-right: ${labelHorizontalSpacing};

  border: ${({ theme }) => theme.primaryColor.base} solid 1px;
  font-size: ${({ theme }) => theme.fontSize.caption};
`;

export const tagFlexBoxStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`;
