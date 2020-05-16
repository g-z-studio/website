import React, { useContext } from "react";
import { Box } from "@gz-studio/components";
import { CatFilterContext } from "../CatFilterStateMgmt";
import { FilterButton } from "./FilterButton";

const containerStyle = `
display: flex;
overflow-x: auto;
overflow-y: hidden;
::-webkit-scrollbar {
  display: none;
}
scroll-snap-type: x mandatory;
`;

export const ScrollableCatFilter = () => {
  const { state, dispatch } = useContext(CatFilterContext);
  const catList = [
    { cat: "image", dispatch: () => dispatch({ type: "image" }) },
    { cat: "espace", dispatch: () => dispatch({ type: "espace" }) },
    { cat: "usage", dispatch: () => dispatch({ type: "usage" }) },
    { cat: "atelier", dispatch: () => dispatch({ type: "atelier" }) },
  ];

  return (
    <Box bottom="M" css={containerStyle}>
      {catList.map((element, index) => (
        <FilterButton
          key={index}
          cat={state[`${element.cat}`]}
          onClick={element.dispatch}
        >
          {element.cat}
        </FilterButton>
      ))}
    </Box>
  );
};
