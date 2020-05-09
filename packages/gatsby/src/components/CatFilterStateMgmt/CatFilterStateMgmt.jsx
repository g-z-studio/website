import React, { useReducer } from "react";

export const CatFilterContext = React.createContext(null);

const initialState = {
  filter: false,
  image: false,
  espace: false,
  usage: false,
  atelier: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "image":
      return state.image
        ? {
            espace: false,
            usage: false,
            atelier: false,
            image: !state.image,
            filter: !state.image,
          }
        : {
            espace: false,
            usage: false,
            atelier: false,
            image: !state.image,
            filter: !state.image,
          };
    case "espace":
      return state.espace
        ? {
            image: false,
            usage: false,
            atelier: false,
            espace: !state.espace,
            filter: !state.espace,
          }
        : {
            image: false,
            usage: false,
            atelier: false,
            espace: !state.espace,
            filter: !state.espace,
          };
    case "usage":
      return state.usage
        ? {
            image: false,
            espace: false,
            atelier: false,
            usage: !state.usage,
            filter: !state.usage,
          }
        : {
            image: false,
            espace: false,
            atelier: false,
            usage: !state.usage,
            filter: !state.usage,
          };
    case "atelier":
      return state.atelier
        ? {
            image: false,
            espace: false,
            usage: false,
            atelier: !state.atelier,
            filter: !state.atelier,
          }
        : {
            image: false,
            espace: false,
            usage: false,
            atelier: !state.atelier,
            filter: !state.atelier,
          };
    default:
      throw new Error();
  }
};

export const CatFilterStateMgmt = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CatFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </CatFilterContext.Provider>
  );
};
