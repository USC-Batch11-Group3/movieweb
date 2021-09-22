import React, { createContext, useReducer, useEffect } from "react";
import appReducer from "./appReducer";

// inital state
const initialState = {
  likeList: localStorage.getItem("likeList")
    ? JSON.parse(localStorage.getItem("likeList"))
    : [],
  discardList: localStorage.getItem("discardList")
    ? JSON.parse(localStorage.getItem("discardList"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    localStorage.setItem("likeList", JSON.stringify(state.likeList));
    localStorage.setItem("discardList", JSON.stringify(state.discardList));
  }, [state]);

  const addMovieToLikelist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_LIKELIST", payload: movie });
  };

  const addMovieToDiscard = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_DISCARD", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        likeList: state.likeList,
        discardList: state.discardList,
        addMovieToLikelist,
        addMovieToDiscard,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
