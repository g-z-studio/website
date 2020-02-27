import React, { useContext } from "react";

import { Wrapper } from "../Wrapper";
import { ProjectFilterContext } from "../ProjectStateManagement";
import { FilterButton } from "./FilterButton";

export const ProjectFilter = () => {
  const { state, dispatch } = useContext(ProjectFilterContext);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};
