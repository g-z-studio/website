import React from "react";
import { Grid } from "@gz-studio/components";
import SEO from "../components/seo";
import { Layout } from "../components/Layout";
import { Hero, Contact, Portfolio } from "../scenes";
import { CatFilterStateMgmt } from "../components";

const IndexPage = () => (
  <Layout>
    <CatFilterStateMgmt>
      <SEO title="Home" />
      <Grid rows="auto auto auto 15vh">
        <Hero id="infos" />
        <Portfolio id="projects" />
        <Contact id="contact" />
      </Grid>
    </CatFilterStateMgmt>
  </Layout>
);

export default IndexPage;
