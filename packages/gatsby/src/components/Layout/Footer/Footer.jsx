import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Wrapper } from "../../Wrapper";

import { theme } from "../../../globals";

const StyledFooter = styled.footer`
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  box-sizing: border-box;

  margin-top: ${theme.spacing.M}px;
  height: 15vh;
  background: ${theme.neutral4};
  color: ${theme.neutral1};
  > * {
    color: ${theme.neutral1};
  }
`;

export const Footer = () => (
  <StyledFooter>
    <Wrapper marginHeight="40">
      © {new Date().getFullYear()} g.z. studio
    </Wrapper>
  </StyledFooter>
);
