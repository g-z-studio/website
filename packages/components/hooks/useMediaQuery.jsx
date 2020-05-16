import { useState, useEffect } from "react";

//query syntax: ["(min-width: 666px)"]
//values: [var]
// defaultValue: var

export const useMediaQuery = (queries, values, defaultValue) => {
  const mediaQueryLists = queries.map((query) => window.matchMedia(query));

  const getValue = () => {
    const index = mediaQueryLists.findIndex((list) => list.matches);
    return values[index] || defaultValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((list) => list.addListener(handler));
    return () => mediaQueryLists.forEach((list) => list.removeListener(handler));
  });

  return value;
};
