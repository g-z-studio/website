import styled from "styled-components";
import { theme } from "../globals";

export const Button = styled.button`
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  border: none;
  border-radius: ${theme.borderRadius}rem;

  padding: ${theme.spacing.S}rem ${theme.spacing.M}rem;
  min-width: ${theme.spacing.XL}rem;
  max-width: ${theme.spacing.L * 4}rem;

  font-size: ${theme.utils.buttonFontSize};
  font-weight: ${theme.utils.buttonFontWeight};

  color: ${theme.neutral5};
  background-color: ${theme.mint1};
  border: ${theme.mint2} solid 1.5px;

  transition: all ${theme.steady} cubic-bezier(0.6, 0, 0.4, 1);

  :hover {
    background-color: ${theme.mint3};
    border: ${theme.mint3} solid 1.5px;
  }
  :active {
  }
`;
