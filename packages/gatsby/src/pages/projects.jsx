import React, { useState } from "react";
import SEO from "../components/seo";
import { Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";
import { ProjectFilter } from "../components/ProjectFilter";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("none");
  return (
    <Layout>
      <SEO title="Projets" />
      <Wrapper height="100">
        <h1>Projets</h1>
        <ProjectFilter state={filter} />
      </Wrapper>
    </Layout>
  );
};

export default ProjectsPage;
