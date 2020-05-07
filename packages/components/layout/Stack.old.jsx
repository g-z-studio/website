// @@@@@ TO DEPRECATE

import React from "react";
import styled from "styled-components";

import { theme } from "../globals";

const paddingCases = (padding) => {
  switch (padding) {
    case "S":
      return theme.spacing.S;
    case "M":
      return theme.spacing.M;
    case "L":
      return theme.spacing.L;
    case "XL":
      return theme.spacing.XL;
    default:
      return 0;
  }
};

const Div = styled.div`
  // display: flex;
  // flex-direction: column;

  padding-top: ${(props) => paddingCases(props.top)}rem;
  padding-bottom: ${(props) => paddingCases(props.bottom)}rem;
`;

const BoxedChild = styled(({ component, ...props }) =>
  React.cloneElement(component, props),
)`
  // display: flex;
  // flex-direction: column;
  // box-sizing: border-box;

  padding-top: ${(props) => paddingCases(props.top)}rem;
  padding-bottom: ${(props) => paddingCases(props.bottom)}rem;
`;

export const Stack = ({ top, bottom, className, children }) =>
  React.Children.count(children) === 1 && children.type !== React.Fragment ? (
    <BoxedChild component={children} top={top} bottom={bottom} className={className} />
  ) : (
    <Div top={top} bottom={bottom} className={className}>
      {children}
    </Div>
  );
