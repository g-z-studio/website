import React from "react";
import styled from "styled-components";
import { StyledClone } from "./StyledClone";

const Div = styled.div`
  ${(props) => props.cloneStyle}
`;

const BoxedChild = StyledClone`
  ${(props) => props.cloneStyle}
`;

// export const CloneOrDiv = ({ children, ...otherProps }) =>
//   React.Children.count(children) === 1 && children.type !== React.Fragment ? (
//     <BoxedChild {...otherProps} component={children} />
//   ) : (
//     <Div {...otherProps}>{children}</Div>
//   );

export const CloneOrDiv = ({ className, children, ...otherProps }) =>
  children.type !== "string" &&
  children.type !== React.Fragment &&
  React.Children.count(children) === 1 ? (
    <BoxedChild {...otherProps} className={className} component={children} />
  ) : (
    <Div {...otherProps} className={className}>
      {children}
    </Div>
  );
