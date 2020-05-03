import React from "react";
import styled from "styled-components";

import { Wrapper } from "../../Wrapper";

import { theme } from "../../../globals";

const StyledDiv = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 30px;
  width: 100%;
  background: linear-gradient(to bottom, transparent, ${theme.neutral1});

  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  box-sizing: border-box;

  margin-top: ${theme.spacing.M}px;
  height: 15vh;
  color: ${theme.neutral5};
  > * {
    color: ${theme.neutral5};
  }
`;

export const ContactFooter = () => (
  <StyledDiv>
    <Wrapper marginHeight="40">
      {"{  facebook / instagram / linkedin / mail  }"}
    </Wrapper>
  </StyledDiv>
);
