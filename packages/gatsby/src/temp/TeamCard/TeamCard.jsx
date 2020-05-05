import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

import { Wrapper } from "../Wrapper";

const GridDiv = styled.div`
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(3, 1fr);
  width: 100%;
  margin: 40px 0;
  max-width: 100%;
`;
const StyledDiv = styled.div`
  grid-column-start: ${props => props.grid};
`;

const TophMif = styled.img`
  grid-column-start: ${props => props.grid};
`;

const MemberPreview = ({ to, src, alt, grid }) => (
  <StyledDiv grid={grid}>
    <Link to={to}>
      <img src={src} alt={alt} />
    </Link>
  </StyledDiv>
);

export const TeamCard = () => (
  <Wrapper marginHeight="100">
    <h2>Team</h2>
    <GridDiv>
      <MemberPreview to="/" src="/" alt="image" grid="1" />
      <MemberPreview to="/" src="/" alt="image" grid="3" />
      <MemberPreview to="/" src="/" alt="image" grid="2" />
      <MemberPreview to="/" src="/" alt="image" grid="1" />
      <MemberPreview to="/" src="/" alt="image" grid="3" />
      <TophMif src="/" alt="toph de mif" grid="2" />
    </GridDiv>
  </Wrapper>
);

MemberPreview.defaultProps = {
  to: "/",
  src: "/",
  alt: "image",
  grid: "1",
};

MemberPreview.propTypes = {
  to: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  grid: PropTypes.string,
};
