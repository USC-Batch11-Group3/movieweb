export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_LIKELIST":
      return {
        ...state,
        likeList: [action.payload, ...state.likeList],
      };
    case "ADD_MOVIE_TO_DISCARD":
      return {
        ...state,
        discardList: [action.payload, ...state.discardList],
      };
    default:
      return state;
  }
};
