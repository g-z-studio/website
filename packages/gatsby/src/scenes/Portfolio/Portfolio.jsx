import React from "react";
// import { css } from "styled-components";
import { Box, Grid } from "@gz-studio/components";
import { PortfolioElement } from "./PortfolioElement";
import { CatFilter, CatFilterStateMgmt } from "../../components";

import { fakeData } from "./fakeData";

export const Portfolio = ({ id }) => (
  <CatFilterStateMgmt>
    <Box horizontal="M">
      <section id={id}>
        <CatFilter />
        <Grid rows="1fr" gap="M">
          <PortfolioElement
            title="Title"
            cats={["catégorie", "usage"]}
            tags={["tags", "tags", "tags"]}
          />
          {fakeData.map((data, index) => (
            <PortfolioElement
              key={index}
              title={data.title}
              cats={data.cats}
              tags={data.tags}
            />
          ))}
        </Grid>
      </section>
    </Box>
  </CatFilterStateMgmt>
);
