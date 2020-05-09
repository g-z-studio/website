import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "@gz-studio/components";
import { CatFilterContext } from "../CatFilterStateMgmt";

const StyledButton = styled(Button)`
  background: none;
  border: none;
  color: ${props =>
    props.state.filter && props.cat
      ? props.theme.primaryColor.base
      : props.theme.primaryColor.lighter};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.heading3};
  cursor: pointer;
`;

export const FilterButton = ({ children, cat, onClick }) => {
  const { state } = useContext(CatFilterContext);

  return (
    <StyledButton state={state} cat={cat} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

FilterButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  grid: PropTypes.string,
};
