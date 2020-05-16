import React, { useReducer } from "react";
import { switchCase } from "@gz-studio/components";
export const CatFilterContext = React.createContext(null);

const initialState = {
  filter: false,
  image: true,
  espace: false,
  usage: false,
  atelier: false,
};
const setCases = state => ({
  image: {
    image: !state.image,
    espace: false,
    usage: false,
    atelier: false,
    filter: !state.image,
  },
  espace: {
    image: false,
    espace: !state.espace,
    usage: false,
    atelier: false,
    filter: !state.espace,
  },
  usage: {
    image: false,
    espace: false,
    usage: !state.usage,
    atelier: false,
    filter: !state.usage,
  },
  atelier: {
    image: false,
    espace: false,
    usage: false,
    atelier: !state.atelier,
    filter: !state.atelier,
  },
});

const reducer = (state, action) =>
  switchCase(setCases(state))(() => {
    throw new Error(`action.type: ${action.type} is not recognized`);
  })(action.type);

export const CatFilterStateMgmt = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CatFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </CatFilterContext.Provider>
  );
};
