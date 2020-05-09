import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../../globals";

import { ProjectFilterContext } from "../../../components/CatFilterStateMgmt";

const StyledButton = styled.button`
  background: none;
  border: none;
  color: ${props =>
    props.state.filter && props.hashtag ? theme.neutral5 : theme.neutral3};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

export const FilterButton = ({ children, hashtag, onClick }) => {
  const { state } = useContext(ProjectFilterContext);

  return (
    <StyledButton state={state} hashtag={hashtag} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

FilterButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  grid: PropTypes.string,
};
