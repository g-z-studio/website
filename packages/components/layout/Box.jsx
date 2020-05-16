import React from "react";
import styled, { css } from "styled-components";
import { CloneOrDiv } from "../utils";
import { spacingCases } from "./spacingCases";

const boxStyleWithQuery = css`
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ vertical, horizontal }) =>
    (vertical || horizontal) &&
    `padding: ${spacingCases(vertical)} ${spacingCases(horizontal)};`}
  ${({ top }) => top && `padding-top: ${spacingCases(top)};`}
  ${({ bottom }) => bottom && `padding-bottom: ${spacingCases(bottom)};`}
  ${({ left }) => left && `padding-left: ${spacingCases(left)};`}
  ${({ right }) => right && `padding-right: ${spacingCases(right)};`}

  @media (min-horizontal: ${({ theme }) => theme.screen.phoneM}px) {
    ${({ height }) => height && `height: ${height};`}
    ${({ width }) => width && `width: ${width};`}
    ${({ vertical, horizontal }) =>
      (vertical || horizontal) &&
      `padding: ${spacingCases(vertical)} ${spacingCases(horizontal) * 3};`}
    ${({ top }) => top && `padding-top: ${spacingCases(top)};`}
    ${({ bottom }) => bottom && `padding-bottom: ${spacingCases(bottom)};`}
    ${({ left }) => left && `padding-left: ${spacingCases(left)};`}
    ${({ right }) => right && `padding-right: ${spacingCases(right)};`}
  }
`;

const BoxStyle = styled(CloneOrDiv)`
  ${boxStyleWithQuery}
`;
export const Box = React.forwardRef((props, ref) => (
  <BoxStyle {...props} ref={ref}>
    {props.children}
  </BoxStyle>
));
