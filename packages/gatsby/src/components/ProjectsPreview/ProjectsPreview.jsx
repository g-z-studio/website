import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

import { Wrapper } from "../Wrapper";

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  width: 100%;
  margin: 40px 0;
  max-width: 100%;
`;

const LinkBlock = styled.div`
  grid-area: 1 / 3 / 3 / 3;
  align-self: center;
`;

const StyledDiv = styled.div`
  grid-column-start: ${props => props.grid};
`;

const Preview = ({ to, src, alt, grid }) => (
  <StyledDiv grid={grid}>
    <Link to={to}>
      <img src={src} alt={alt} />
    </Link>
  </StyledDiv>
);

export const ProjectsPreview = () => (
  <Wrapper marginHeight="100">
    <h2>Projets</h2>
    <GridDiv>
      <Preview to="/" src="/" alt="image" grid="1" />
      <Preview to="/" src="/" alt="image" grid="2" />
      <Preview to="/" src="/" alt="image" grid="1" />
      <Preview to="/" src="/" alt="image" grid="2" />
      <LinkBlock>Lien vers Projets</LinkBlock>
    </GridDiv>
  </Wrapper>
);

Preview.defaultProps = {
  to: "/",
  src: "/",
  alt: "image",
  grid: "1",
};

Preview.propTypes = {
  to: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  grid: PropTypes.string,
};
