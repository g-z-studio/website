import React from "react";
import SEO from "../../components/seo";
import { Layout } from "../../components/Layout";
import { Wrapper } from "../../components/Wrapper";
import { HomeCard } from "../../components/HomeCard";

const UsagePage = () => (
  <Layout>
    <SEO title="Usage" />
    <Wrapper height="100">
      <h1>Usage</h1>
      <HomeCard
        paragraph="GZ studio propose des Usage
      comme sa t oklm on te fai sa bien.
      En fait nous l’Usage c vraiment notre
      truc et si tu veux tu nous appelle et c
      parti en 2-2 boum boum:"
        link="contact"
        url="/contact"
      />
    </Wrapper>
  </Layout>
);

export default UsagePage;
