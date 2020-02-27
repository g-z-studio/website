import React from "react";
import SEO from "../components/seo";
import { Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";

// import { FormContact } from "../components/FormContact";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Wrapper height="100">
      <h1>Contact</h1>
      <Wrapper marginHeight="40">
        <h3>mail</h3>
        <div>zecri@gz.mafia</div>
      </Wrapper>
      {/* <FormContact /> */}
    </Wrapper>
  </Layout>
);

export default ContactPage;
