import React from "react";
import styled from "styled-components";

export const SoundPlayer = ({ children }) => {
  return (
    <StyledDiv>
      <h5>{children}</h5>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  margin: ${(props) => props.theme.spacing.S};
  padding: ${(props) => props.theme.spacing.S};
  border: 1px solid;
  position: relative;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    background: ${(props) => props.theme.secondaryColor.base};
  }

  &::before {
    top: -0.4em; // let it overlap a bit to prevent thin line which could appear during scaling in some browsers etc.
    bottom: -0.4em;
    left: ${(props) => props.theme.spacing.S};
    right: ${(props) => props.theme.spacing.S};
  }

  &::after {
    left: -0.4em;
    right: -0.4em;
    top: ${(props) => props.theme.spacing.S};
    bottom: ${(props) => props.theme.spacing.S};
  }

  // you need this to move the text in front of the ::after overlay
  h5 {
    position: relative;
    z-index: 1;
    margin: 0;
    text-align: center;
    font-weight: ${(props) => props.theme.fontWeight.normal};
  }
`;
