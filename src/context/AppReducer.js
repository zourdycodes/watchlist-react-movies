const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      //? will add to the arrays --> existing watchlist
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    default:
      return false;
  }
};

export default AppReducer;
