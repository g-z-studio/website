// @@@@@ TO DEPRECATE

import React from "react";
import styled from "styled-components";

import { theme } from "../globals";

const marginCases = (margin) => {
  switch (margin) {
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
  margin-left: ${(props) => marginCases(props.left)}rem;
  margin-right  ${(props) => marginCases(props.right)}rem;
`;

const BoxedChild = styled(({ component, ...props }) =>
  React.cloneElement(component, props),
)`
  margin-left: ${(props) => marginCases(props.left)}rem;
  margin-right  ${(props) => marginCases(props.right)}rem;
`;

export const Inlet = ({ left, right, className, children, simple }) => {
  if (simple) {
    return (
      <Div left={left} right={right} className={className}>
        {children}
      </Div>
    );
  }
  return React.Children.count(children) === 1 ? (
    <BoxedChild component={children} left={left} right={right} className={className} />
  ) : (
    <Div left={left} right={right} className={className}>
      {children}
    </Div>
  );
};
