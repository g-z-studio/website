import React, { useContext } from "react";
import { css } from "styled-components";
import { Box, Grid, TagLabel, Button } from "@gz-studio/components";
import { CatFilterContext } from "../../../components";
import { fakeData } from "./fakeData";

export const CategoryScreen = ({ cssToChild }) => {
  const { state } = useContext(CatFilterContext);
  const catList = Object.keys(state).filter(e => e !== "filter");

  return (
    <Box css={cssToChild}>
      <div />
      <Grid rows="3fr 1fr 1fr" columns="1fr 1fr">
        {catList.map(
          (cat, key) =>
            state[cat] && (
              <>
                <p key={"p" + key} css="grid-row: 1; grid-column: 1 / span 2;">
                  {fakeData[cat].body}
                </p>
                <TagLabelList
                  cat={cat}
                  key={key}
                  css="grid-row: 2; grid-column: 1 / span 2;"
                />
                <Button
                  key={"button" + key}
                  as="a"
                  href="#projects"
                  css="grid-row: 3; grid-column: 2"
                >
                  Voir les projets concernés →
                </Button>
              </>
            )
        )}
      </Grid>
    </Box>
  );
};

const tagFlexBoxStyle = css`
  grid-row: 2;
  grid-column: 1 / span 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`;
const TagLabelList = ({ cat }) => (
  <Box css={tagFlexBoxStyle}>
    {fakeData[cat].tags.map((tag, key) => (
      <TagLabel key={"tag" + key}>{tag}</TagLabel>
    ))}
  </Box>
);
