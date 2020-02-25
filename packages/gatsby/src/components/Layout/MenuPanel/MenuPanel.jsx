import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../../globals";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.neutral5};
  color: ${theme.neutral1};
  text-align: left;
  padding: 2rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.3s ease-in-out;
  cursor: default;

  transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0%)" : "translateX(100%)"};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 40%;
  }

  a {
    font-size: 1.5rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
      (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

const MenuLink = styled(Link)`
  color: ${props => (props.url === props.to ? theme.neutral5 : theme.neutral1)};
  background-color: ${props =>
    props.url === props.to ? theme.neutral1 : theme.neutral5};
`;

export const MenuPanel = ({ menuOpen }) => {
  const location = useLocation();

  return (
    <StyledNav menuOpen={menuOpen}>
      <MenuLink url={location.pathname} to="/">
        Home
      </MenuLink>
      <MenuLink url={location.pathname} to="/infos">
        Infos
      </MenuLink>
      <MenuLink url={location.pathname} to="/services">
        Services
      </MenuLink>
      <MenuLink url={location.pathname} to="/projects">
        Projets
      </MenuLink>
      <MenuLink url={location.pathname} to="/contact">
        Contact
      </MenuLink>
    </StyledNav>
  );
};
