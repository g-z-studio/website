import React from "react";

import SEO from "../components/seo";
import { Layout } from "../components/Layout";
import { Hero, Contact, Portfolio } from "../scenes";
// import { Wrapper } from "../components/Wrapper";
// import { ProjectsPreview } from "../components/ProjectsPreview";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Portfolio />
    <Contact />
  </Layout>
);

export default IndexPage;
