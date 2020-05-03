import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { GlobalStyle } from "../../globals";
import { Navbar } from "./Navbar";
import { MenuPanel } from "./MenuPanel";
import { useOnClickOutside } from "./hook";
import { Footer } from "./Footer";
import { Wrapper } from "../Wrapper";
import { ContactFooter } from "./ContactFooter";

const OverflowWrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setMenuOpen(false));
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <OverflowWrapper>
      <GlobalStyle />
      <div ref={node}>
        <Navbar
          siteTitle={data.site.siteMetadata.title}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <MenuPanel menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <Wrapper marginHeight="144" marginWidth="36" height="79">
        <main>{children}</main>
        <ContactFooter />
      </Wrapper>
      <Footer>© {new Date().getFullYear()} g.z. studio</Footer>
    </OverflowWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
