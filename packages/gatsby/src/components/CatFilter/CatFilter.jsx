import React, { useContext, useRef } from "react";
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

export const CatFilter = () => {
  const { state } = useContext(CatFilterContext);
  const rootRef = useRef(null);

  const categoryList = Object.keys(state).filter(key => key !== "filter");

  return (
    <Box bottom="M" ref={rootRef} css={containerStyle}>
      <Box horizontal="L">
        <div />
      </Box>
      {categoryList.map((element, index) => (
        <Box horizontal="M" key={index}>
          <FilterButton key={index} cat={element} rootRef={rootRef}>
            {element}
          </FilterButton>
        </Box>
      ))}
      <Box horizontal="L">
        <div />
      </Box>
    </Box>
  );
};
