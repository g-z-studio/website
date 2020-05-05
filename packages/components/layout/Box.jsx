import React from "react";
import styled, { css } from "styled-components";

import { CloneOrDiv, propertyExistOrVoid, propertyExistOrZero } from "../utils";
import { spacingCases } from "./spacingCases";
import { theme } from "../globals";

const heightExist = (height) => propertyExistOrVoid(height)(height);
const widthExist = (width) => propertyExistOrVoid(width)(width);
const topExist = (top) =>
  propertyExistOrVoid(top)(`padding-top: ${spacingCases(top)}rem;`);
const bottomExist = (bottom) =>
  propertyExistOrVoid(bottom)(`padding-bottom: ${spacingCases(bottom)}rem;`);
const leftExist = (left) =>
  propertyExistOrVoid(left)(`padding-left: ${spacingCases(left)}rem;`);
const rightExist = (right) =>
  propertyExistOrVoid(right)(`padding-right: ${spacingCases(right)}rem;`);
const verticalExist = (vertical) =>
  propertyExistOrZero(vertical)(`${spacingCases(vertical)}rem`);
const horizontalExist = (horizontal) =>
  propertyExistOrZero(horizontal)(`${spacingCases(horizontal)}rem`);
const horizontalExistx3 = (horizontal) =>
  propertyExistOrZero(horizontal)(`${spacingCases(horizontal) * 3}rem`);

const boxStyleWithQuery = css`
  ${({ height }) => heightExist(height)};
  ${({ width }) => widthExist(width)};
  ${({ top }) => topExist(top)}
  ${({ bottom }) => bottomExist(bottom)}
  ${({ left }) => leftExist(left)}
  ${({ right }) => rightExist(right)}
  ${({ vertical, horizontal }) =>
    vertical || horizontal
      ? `padding: ${verticalExist(vertical)} ${horizontalExist(horizontal)} ;`
      : ""}

  @media (min-horizontal: ${theme.phoneM}px) {
    ${({ height }) => heightExist(height)};
    ${({ width }) => widthExist(width)};
    ${({ top }) => topExist(top)}
    ${({ bottom }) => bottomExist(bottom)}
    ${({ left }) => leftExist(left)}
    ${({ right }) => rightExist(right)}
    ${({ vertical, horizontal }) =>
      vertical || horizontal
        ? `padding: ${verticalExist(vertical)} ${horizontalExistx3(horizontal)} ;`
        : ""}
  }
`;

const StyledBox = styled(CloneOrDiv)`
  ${boxStyleWithQuery}
`;

export const Box = ({
  horizontal,
  vertical,
  height,
  width,
  top,
  bottom,
  left,
  right,
  className,
  children,
}) => (
  <StyledBox
    horizontal={horizontal}
    vertical={vertical}
    height={height}
    width={width}
    top={top}
    bottom={bottom}
    left={left}
    right={right}
    children={children}
    className={className}
  />
);

// export const Box = ({
//   horizontal,
//   vertical,
//   height,
//   width,
//   top,
//   bottom,
//   left,
//   right,
//   className,
//   children,
// }) => (
//   <CloneOrDiv
//     horizontal={horizontal}
//     vertical={vertical}
//     height={height}
//     width={width}
//     top={top}
//     bottom={bottom}
//     left={left}
//     right={right}
//     cloneStyle={boxStyleWithQuery}
//     children={children}
//     className={className}
//   />
// );

// const Div = styled.div`
// height: ${(props) => props.height};
// padding: ${(props) => spacingCases(props.vertical)}rem
//   ${(props) => spacingCases(props.horizontal)}rem;

// @media (min-horizontal: ${theme.phoneM}px) {
//   height: ${(props) => props.height};
//   padding: ${(props) => spacingCases(props.vertical)}rem
//     ${(props) => spacingCases(props.horizontal) * 3}rem;
// }
// `;

// const BoxedChild = styled(({ component, ...props }) =>
//   React.cloneElement(component, props),
// )`
//   height: ${(props) => props.height};
//   padding: ${(props) => spacingCases(props.vertical)}rem
//     ${(props) => spacingCases(props.horizontal)}rem;

//   @media (min-horizontal: ${theme.phoneM}px) {
//     height: ${(props) => props.height};
//     padding: ${(props) => spacingCases(props.vertical)}rem
//       ${(props) => spacingCases(props.horizontal) * 3}rem;
//   }
// `;

// export const Box = ({ horizontal, vertical, height, className, children }) => {
//   return React.Children.count(children) === 1 && children.type !== React.Fragment ? (
//     <BoxedChild
//       component={children}
//       horizontal={horizontal}
//       vertical={vertical}
//       height={height}
//       className={className}
//     />
//   ) : (
//     <Div
//       horizontal={horizontal}
//       vertical={vertical}
//       height={height}
//       className={className}
//     >
//       {children}
//     </Div>
//   );
// };
