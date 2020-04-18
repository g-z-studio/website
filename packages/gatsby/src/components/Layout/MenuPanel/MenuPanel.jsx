import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "@reach/router";
import { useSpring, a, config } from "react-spring";

import { StyledNav, MenuLink } from "./MenuPanel.styles";

const AnimatedMenuLink = a(MenuLink);

export const MenuPanel = ({ menuOpen }) => {
  const location = useLocation();

  const animLink = useSpring({
    from: { opacity: 0, transform: "translate3d(-20px,0,0)" },
    to: {
      opacity: menuOpen ? 1 : 0,
      transform: `translate3d(${menuOpen ? 0 : -20}px,0,0)`,
    },
    config: config.gentle,
  });

  return (
    <StyledNav menuOpen={menuOpen}>
      <AnimatedMenuLink style={animLink} url={location.pathname} to="/">
        Home
      </AnimatedMenuLink>
      <AnimatedMenuLink style={animLink} url={location.pathname} to="/infos">
        Infos
      </AnimatedMenuLink>
      <AnimatedMenuLink style={animLink} url={location.pathname} to="/services">
        Services
      </AnimatedMenuLink>
      <AnimatedMenuLink style={animLink} url={location.pathname} to="/projects">
        Projets
      </AnimatedMenuLink>
      <AnimatedMenuLink style={animLink} url={location.pathname} to="/contact">
        Contact
      </AnimatedMenuLink>
    </StyledNav>
  );
};

MenuPanel.propTypes = {
  menuOpen: PropTypes.bool,
};
