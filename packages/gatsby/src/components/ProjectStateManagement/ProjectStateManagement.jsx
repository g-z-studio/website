import React, { useReducer, useEffect } from "react";

export const ProjectFilterContext = React.createContext(null);

const initialState = {
  filter: false,
  image: false,
  espace: false,
  usage: false,
  atelier: false,
};

const reducer = (state, action) => {
  let filterActive = !(
    state.image ^
    state.espace ^
    state.usage ^
    state.atelier
  );

  switch (action.type) {
    case "image":
      return state.image
        ? {
            espace: false,
            usage: false,
            atelier: false,
            image: !state.image,
            filter: filterActive,
          }
        : {
            espace: false,
            usage: false,
            atelier: false,
            image: !state.image,
            filter: filterActive,
          };
    case "espace":
      return state.espace
        ? {
            image: false,
            usage: false,
            atelier: false,
            espace: !state.espace,
            filter: filterActive,
          }
        : {
            image: false,
            usage: false,
            atelier: false,
            espace: !state.espace,
            filter: filterActive,
          };
    case "usage":
      return state.usage
        ? {
            image: false,
            espace: false,
            atelier: false,
            usage: !state.usage,
            filter: filterActive,
          }
        : {
            image: false,
            espace: false,
            atelier: false,
            usage: !state.usage,
            filter: filterActive,
          };
    case "atelier":
      return state.atelier
        ? {
            image: false,
            espace: false,
            usage: false,
            atelier: !state.atelier,
            filter: filterActive,
          }
        : {
            image: false,
            espace: false,
            usage: false,
            atelier: !state.atelier,
            filter: filterActive,
          };
    default:
      throw new Error();
  }
};

export const ProjectStateManagement = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProjectFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectFilterContext.Provider>
  );
};

// const testReset = (rep, state, action) => {
//   if (
//     state.image &&
//     state.espace &&
//     state.usage &&
//     state.atelier &&
//     state.filter
//   ) {
//     return action => action({ type: "turnoff" });
//   }
//   return state;
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "turnoff":
//       return { ...state, filter: false };
//     case "image":
//       let rep = state.image
//         ? { ...state, image: !state.image, filter: true }
//         : { ...state, image: !state.image, filter: true };
//       return testReset(rep, state, action);
//     case "espace":
//       return state.espace
//         ? { ...state, espace: false, filter: true }
//         : { ...state, espace: true, filter: true };
//     case "usage":
//       return state.usage
//         ? { ...state, usage: false, filter: true }
//         : { ...state, usage: true, filter: true };
//     case "atelier":
//       return state.atelier
//         ? { ...state, atelier: false, filter: true }
//         : { ...state, atelier: true, filter: true };
//     default:
//       throw new Error();
//   }
// };

// export const ProjectStateManagement = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <ProjectFilterContext.Provider value={{ state, dispatch }}>
//       {children}
//     </ProjectFilterContext.Provider>
//   );
// };
