import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { GlobalStyle } from "../../globals";
import { Navbar } from "./Navbar";
import { MenuPanel } from "./MenuPanel";

const Div = styled.div`
  margin: 100px 0 auto auto;
  max-width: 960;
  padding: 0 1.0875rem 1.45rem;
`;

export const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <>
      <GlobalStyle />
      <Navbar
        siteTitle={data.site.siteMetadata.title}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <MenuPanel menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Div>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} g.z. studio</footer>
      </Div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
