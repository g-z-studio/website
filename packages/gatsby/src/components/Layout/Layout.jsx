import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import { Grid, CustomGlobalStyle, Navbar, Footer } from "@gz-studio/components";
import { fontFace, main, theme } from "../../globals";

export const Layout = ({ children }) => {
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
      {/* <ThemeProvider theme={theme}> */}
      <CustomGlobalStyle main={main} fontFace={fontFace} />
      <Grid rows="10vh auto 10vh" gap="M">
        <Navbar siteTitle={data.site.siteMetadata.title} css="grid-row: 1;" />
        <main css="grid-row: 2;">{children}</main>
        <Footer css="grid-row: 3;" />
      </Grid>
      {/* </ThemeProvider> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
// import { GlobalStyle } from "../../globals";
// import { Navbar } from "./Navbar";
// import { MenuPanel } from "./MenuPanel";
// import { useOnClickOutside } from "./hook";
// import { Footer } from "./Footer";
// import { Wrapper } from "../Wrapper";
// import { ContactFooter } from "./ContactFooter";

// const OverflowWrapper = styled.div`
//   overflow: hidden;
//   position: relative;
// `;

// export const Layout = ({ children }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const node = useRef();
//   useOnClickOutside(node, () => setMenuOpen(false));
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `);

//   return (
//     <OverflowWrapper>
//       <GlobalStyle />
//       <div ref={node}>
//         <Navbar
//           siteTitle={data.site.siteMetadata.title}
//           menuOpen={menuOpen}
//           setMenuOpen={setMenuOpen}
//         />
//         <MenuPanel menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//       </div>
//       <Wrapper marginHeight="144" marginWidth="36" height="79">
//         <main>{children}</main>
//         <ContactFooter />
//       </Wrapper>
//       <Footer>© {new Date().getFullYear()} g.z. studio</Footer>
//     </OverflowWrapper>
//   );
// };

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };
