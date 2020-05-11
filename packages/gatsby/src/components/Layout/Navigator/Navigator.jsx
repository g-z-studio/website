import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useSpring } from "react-spring";
import { Header, Box } from "@gz-studio/components";

import { Nav } from "./Nav";
import { NavIcon } from "./NavIcon";

const StyledH1 = styled.h1`
  text-decoration: none;
  font-family: BCFalsterGrotesk, sans-serif;
  font-weight: bold;
  font-size: 4rem;
  margin: 1rem 0 0 0;
  left: -0.5rem;
`;

export const Navigator = ({ siteName, links }) => {
  const [open, setOpen] = useState(false);

  //test la forme callback pour éviter le bug pour un changement de state rapide
  const { opacity, transform } = useSpring({
    from: { opacity: 0, transform: `rotate(0deg)` },
    to: { opacity: open ? 1 : 0, transform: `rotate(${open ? 180 : 0}deg)` },
  });

  return (
    <Header>
      <Box
        width="100%"
        vertical="S"
        css="  
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      "
      >
        <StyledH1 css="">{siteName}</StyledH1>
        <NavIcon style={{ transform }} open={open} setOpen={setOpen} />
      </Box>
      <Nav style={{ opacity }} links={links} />
    </Header>
  );
};

Navigator.propTypes = {
  siteName: PropTypes.string,
};
