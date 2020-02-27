import React from "react";
import SEO from "../../components/seo";
import { Layout } from "../../components/Layout";
import { Wrapper } from "../../components/Wrapper";
import { HomeCard } from "../../components/HomeCard";

const EspacePage = () => (
  <Layout>
    <SEO title="Espace" />
    <Wrapper height="100">
      <h1>Espace</h1>
      <HomeCard
        paragraph="GZ studio propose des Espace
      comme sa t oklm on te fai sa bien.
      En fait nous l’Espace c vraiment notre
      truc et si tu veux tu nous appelle et c
      parti en 2-2 boum boum:"
        link="contact"
        url="/contact"
      />
    </Wrapper>
  </Layout>
);

export default EspacePage;
