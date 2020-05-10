import React from "react";
import { Box } from "@gz-studio/components";
import { Layout } from "../components/Layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Box height="80vh">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Box>
  </Layout>
);

export default NotFoundPage;
