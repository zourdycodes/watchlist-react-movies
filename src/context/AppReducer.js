/**
 * @param  {} state
 * @param  {} action
 * @param  {} =>{switch(action.type
 * @param  {return{...state} {case"ADD_MOVIE_TO_WATCHLIST"
 * @param  {[action.payload} watchlist
 * @param  {} ...state.watchlist]
 * @param  {return{...state} };case"REMOVE_MOVIE_FROM_WATCHLIST"
 * @param  {state.watchlist.filter((movie} watchlist
 * @returns returnfalse
 */
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

    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    default:
      return false;
  }
};

export default AppReducer;
