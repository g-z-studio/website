import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import {
  Grid,
  CustomThemeProvider,
  CustomGlobalStyle,
  Footer,
} from "@gz-studio/components";
import { fontFace, main, theme } from "../../globals";
import { SocialBar } from "../SocialBar";
import { Navigator } from "./Navigator";
const SmoothScroll = require("smooth-scroll");

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

  (() => {
    return new SmoothScroll('a[href*="#"]', {
      offset: 150,
    });
  })();

  const links = [
    { href: "/#infos", title: "infos" },
    { href: "/#projects", title: "projets" },
    { href: "/#contact", title: "contact" },
  ];

  return (
    <CustomThemeProvider theme={theme}>
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
    </CustomThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
