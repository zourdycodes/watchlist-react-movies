const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      //? will add to the arrays --> existing watchlist
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return false;
  }
};

export default AppReducer;
