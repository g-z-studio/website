import React, { useContext, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import { CatFilterContext } from "../CatFilterStateMgmt";

export const FilterButton = ({ children, cat, rootRef, ...props }) => {
  const { state, dispatch } = useContext(CatFilterContext);
  const [ref, inView] = useInView({
    root: rootRef.current,
    rootMargin: "0% 0% 0% 0%",
    threshold: 1,
  });

  const handleClick = useCallback(cat => dispatch({ type: cat }), [dispatch]);

  useEffect(() => {
    inView && dispatch({ type: cat });
  }, [inView, dispatch, cat]);

  return (
    <StyledButton
      state={state}
      catState={state[cat]}
      onClick={() => handleClick(cat)}
      ref={ref}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

FilterButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  grid: PropTypes.string,
};

const StyledButton = styled.button`
  background: none;
  border: none;
  // text-align: center;
  text-decoration: none;
  max-width: none;
  color: ${props =>
    props.state.filter && props.catState
      ? props.theme.primaryColor.base
      : props.theme.primaryColor.lighter};

  font-size: ${({ theme }) => theme.fontSize.heading2};
  font-family: ${({ theme }) => theme.font.brand};
  cursor: pointer;

  scroll-snap-align: center;
  transition: all 200ms cubic-bezier(0.215,0.61,0.355,1);

  :active {
    background: none;
    outline; none;
    color: ${props =>
      props.state.filter && props.catState
        ? props.theme.primaryColor.base
        : props.theme.primaryColor.lighter};
  }
`;
