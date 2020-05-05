// @@@@@ TO DEPRECATE

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// import { theme } from "../../../globals";

const StyledWrapper = styled.div`
  padding: ${(props) => props.marginHeight}px ${(props) => props.marginWidth}px;
  min-height: ${(props) => props.height}vh;
  max-width: 100%;
`;

export const Wrapper = ({ children, marginHeight, marginWidth, height }) => (
  <StyledWrapper marginHeight={marginHeight} marginWidth={marginWidth} height={height}>
    {children}
  </StyledWrapper>
);

Wrapper.propTypes = {
  marginHeight: PropTypes.string,
  marginWidth: PropTypes.string,
  height: PropTypes.string,
};

Wrapper.defaultProps = {
  marginHeight: "0",
  marginWidth: "0",
  height: "0",
};
