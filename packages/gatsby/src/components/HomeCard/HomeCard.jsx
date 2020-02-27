import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
// import { theme } from "../../globals";
import { Link } from "gatsby";

import { Wrapper } from "../Wrapper";

export const HomeCard = ({ paragraph, link, url }) => (
  <Wrapper>
    <p>{paragraph}</p>
    <Link to={url}>{link}</Link>
  </Wrapper>
);

HomeCard.defaultProps = {
  paragraph: "coucou",
  url: "/contact",
  link: "contact",
};

HomeCard.propTypes = {
  paragraph: PropTypes.string,
  url: PropTypes.string,
  link: PropTypes.string,
};
