import React from "react";
import { Grid } from "@gz-studio/components";
import SEO from "../components/seo";
import { Layout } from "../components/Layout";
import { Hero, Contact, Portfolio } from "../scenes";
// import { Wrapper } from "../components/Wrapper";
// import { ProjectsPreview } from "../components/ProjectsPreview";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid rows="auto auto 50vh 10vh">
      <Hero id="infos" />
      <Portfolio id="projects" />
      <Contact id="contact" />
    </Grid>
  </Layout>
);

export default IndexPage;
