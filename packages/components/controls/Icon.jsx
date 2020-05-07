import React from "react";
import styled from "styled-components";
import { Box } from "@gz-studio/components";
import { theme } from "../globals";
import { spacingCases } from "../layout/spacingCases";
import { a } from "react-spring";

const AnimBox = a(Box);

const Wrapper = styled.span`
 svg {
    fill: ${theme.neutral5};
  }
  display: flex;
  justify-content: center;
  align-content: center;
  transform-origin: 45% 45%;
  will-change: transform;

  ${({ width }) => width && `width: ${spacingCases(width)}rem;`}
  ${({ height }) => height && `height: ${spacingCases(height)}rem;`}
  // transition: all ${theme.steady} ease-out;
`;

export const Icon = ({ children, ...props }) => (
  <AnimBox top="S" right="S">
    <Wrapper {...props}>{children}</Wrapper>
  </AnimBox>
);
