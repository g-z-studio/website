import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Hamburger } from "./Hamburger";
const StyledNav = styled.nav`
  position: fixed;
  left: -0.5rem;
  top: 0;
  z-index: 9;
  width: 100vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledH1 = styled.h1`
  font-family: BCFalsterGrotesk, sans-serif;
  font-weight: bold;
  font-size: 4rem;

  margin: 1rem 3rem 0 0;
  textdecoration: none;
`;

const Logo = ({ siteTitle }) => (
  <StyledH1>
    <Link to="/">{siteTitle}</Link>
  </StyledH1>
);

export const Navbar = ({ siteTitle, menuOpen, setMenuOpen }) => (
  <StyledNav>
    <Logo siteTitle={siteTitle} />
    <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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