import React from "react";
import styled from "styled-components";
import { Box } from "../../layout";

const labelHorizontalSpacing = "0.4rem";

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
