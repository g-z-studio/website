import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../globals";
import { Link } from "gatsby";

import { Wrapper } from "../Wrapper";

export const ProjectViewer = ({ hashtag, src, alt, paragraph, url }) => (
  <Wrapper>
    <Link to={url}>
      <img src={src} alt={alt} />
    </Link>
    <Link to={url}>
      <h3>{title}</h3>
    </Link>
    <p>{paragraph}</p>
  </Wrapper>
);

ProjectViewer.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  paragraph: PropTypes.string,
  url: PropTypes.string,
};
