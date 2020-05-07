import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box } from "@gz-studio/components";
import { a } from "react-spring";

const A = styled.a`
  font-family: Halvar;
  font-variant: small-caps;
`;
const AA = a(A);

export const Nav = ({ style, links, styling }) => {
  return (
    <Box as="nav" css={styling}>
      {links.map((link, index) => (
        <Box key={index} right="S">
          <AA style={style} href={link.href}>
            {link.title}
          </AA>
        </Box>
      ))}
    </Box>
  );
};

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};
