import React from "react";
import styled from "styled-components";
import { Box } from "@gz-studio/components";
import { spacingCases } from "../layout/spacingCases";
import { a } from "react-spring";

// @@@@@@@@@ génère l'erreur "Warning: Function components cannot be given refs. ... ""
// Attempts to access this ref will fail. Did you mean to use React.forwardRef()?"
// c'est un bug de react à ignorer, forwardRef() bientot déprécié
const AnimBox = a(Box);

const Wrapper = styled.span`
 svg {
    fill: ${({ theme }) => theme.primaryColor.base};
  }
  display: flex;
  justify-content: center;
  align-content: center;
  transform-origin: 45% 45%;
  will-change: transform;

  ${({ width }) => width && `width: ${spacingCases(width)};`}
  ${({ height }) => height && `height: ${spacingCases(height)};`}
  // transition: all ${({ theme }) => theme.steady} ease-out;
`;

export const Icon = ({ children, ...props }) => (
  <AnimBox top="S" right="S">
    <Wrapper {...props}>{children}</Wrapper>
  </AnimBox>
);
