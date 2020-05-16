import React from "react";
import styled from "styled-components";
import { StyledClone } from "./StyledClone";

const Div = styled.div`
  ${(props) => props.cloneStyle}
`;

const BoxedChild = StyledClone`
  ${(props) => props.cloneStyle} 
`;

export const CloneOrDiv = React.forwardRef(
  ({ className, children, ...otherProps }, ref) =>
    children.type !== "string" &&
    children.type !== React.Fragment &&
    React.Children.count(children) === 1 ? (
      <BoxedChild {...otherProps} className={className} component={children} />
    ) : (
      <Div {...otherProps} className={className} ref={ref}>
        {children}
      </Div>
    ),
);
