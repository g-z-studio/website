import React, { useContext } from "react";
import { Box } from "@gz-studio/components";
import { CatFilterContext } from "../CatFilterStateMgmt";
import { FilterButton } from "./FilterButton";

export const CatFilter = () => {
  const { state, dispatch } = useContext(CatFilterContext);

  return (
    <Box bottom="M">
      <FilterButton
        hashtag={state.image}
        onClick={() => dispatch({ type: "image" })}
      >
        #image
      </FilterButton>
      <FilterButton
        hashtag={state.espace}
        onClick={() => dispatch({ type: "espace" })}
      >
        #espace
      </FilterButton>
      <FilterButton
        hashtag={state.usage}
        onClick={() => dispatch({ type: "usage" })}
      >
        #usage
      </FilterButton>
      <FilterButton
        hashtag={state.atelier}
        onClick={() => dispatch({ type: "atelier" })}
      >
        #atelier
      </FilterButton>
    </Box>
  );
};
