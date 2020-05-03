import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import { theme } from "../../globals";

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

const ProjectTitle = styled.p`
  font-size: ${theme.heading2.fontSize};
  line-height: ${theme.heading2.lineHeight};
`;

const Preview = ({ to, blaze, tags, date, grid }) => (
  <StyledDiv grid={grid}>
    <Link to={to}>
      <ProjectTitle>{blaze}</ProjectTitle>
    </Link>
  </StyledDiv>
);

export const ProjectsPreview = () => (
  <Wrapper marginHeight="100">
    <h2>Projets</h2>
    <GridDiv>
      <Preview to="/" blaze="Atolls" tags={"espace"} date="" grid="1" />
      <Preview
        to="/"
        blaze="Le Pont des Broignes"
        tags={"image"}
        date=""
        grid="2"
      />
      <Preview to="/" blaze="Rose & Marius" tags={"espace"} date="" grid="1" />
      <Preview to="/" blaze="Lieu Unique" tags={""} date="" grid="2" />
      {/* <LinkBlock>Lien vers Projets</LinkBlock> */}
    </GridDiv>
  </Wrapper>
);

Preview.defaultProps = {
  to: "/",
  blaze: "Random",
  tags: "image",
  date: "99/99/9999",
  grid: "1",
};

Preview.propTypes = {
  to: PropTypes.string,
  blaze: PropTypes.string,
  tags: PropTypes.string,
  date: PropTypes.string,
  grid: PropTypes.string,
};
