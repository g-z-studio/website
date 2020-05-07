import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import { Grid, CustomGlobalStyle, Navbar, Footer } from "@gz-studio/components";
import { fontFace, main, theme } from "../../globals";
import { SocialBar } from "../SocialBar";
import { Navigator } from "./Navigator";

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
  const links = [
    { href: "#infos", title: "infos" },
    { href: "#projects", title: "projets" },
    { href: "#contact", title: "contact" },
  ];

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <CustomGlobalStyle main={main} fontFace={fontFace} />
      <Grid rows="10vh auto 10vh" gap="M">
        <Navigator
          siteName={data.site.siteMetadata.title}
          links={links}
          css="grid-row: 1;"
        />
        <main css="grid-row: 2;">{children}</main>
        <Footer css="grid-row: 3;">
          <SocialBar />
        </Footer>
      </Grid>
      {/* </ThemeProvider> */}
    </>
  );
  // return (
  //   <>
  //     {/* <ThemeProvider theme={theme}> */}
  //     <CustomGlobalStyle main={main} fontFace={fontFace} />
  //     <Grid rows="10vh auto 20vh" gap="M">
  //       <Navbar siteTitle={data.site.siteMetadata.title} css="grid-row: 1;" />
  //       <main css="grid-row: 2;">{children}</main>
  //       <Footer cssToChild="grid-row: 3;">
  //         <SocialBar />
  //       </Footer>
  //     </Grid>
  //     {/* </ThemeProvider> */}
  //   </>
  // );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
