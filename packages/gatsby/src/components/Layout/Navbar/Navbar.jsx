import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import Hamburger from "./Hamburger";
const StyledNav = styled.nav``;

const Logo = ({ siteTitle }) => {
  <h1 style={{ margin: 0 }}>
    <Link
      to="/"
      style={{
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
  </h1>;
};

export const Navbar = ({ siteTitle }) => (
  <StyledNav>
    <Logo siteTitle={siteTitle} />
    <Hamburger />
  </StyledNav>
);

Logo.propTypes = {
  siteTitle: PropTypes.string,
};

Logo.defaultProps = {
  siteTitle: ``,
};

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};
