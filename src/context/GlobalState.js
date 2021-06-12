import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

/**
 * * WE USING CONTEXT API --> access the API endpoint everywhere in our components
 * * for you whom that may dont know why we create this --> when we add the movie to watchlist, we keep it using CONTEXT API
 */

//? initial State
export const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

//? create context
export const GlobalContext = createContext(initialState);

//? provider components
/**
 * @param  {} props
 * @param  {} =>{const[state]}
 * @param  {} dispatch]=useReducer(AppReducer)
 * @param  {} initialState
 * @param  {} ;constaddMovieToWatchlist=(movie)
 * @param  {"ADD_MOVIE_TO_WATCHLIST"} =>{dispatch({type
 * @param  {movie} payload
 * @param  {} }
 * @param  {state.watchlist} ;};return(<GlobalContext.Providervalue={{watchlist}}
 * @param  {state.watched} watched
 * @param  {} addMovieToWatchlist
 * @param  {} }}>{props.children}</GlobalContext.Provider>
 */
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //* actions --> what to do when user clicked button
  const addMovieToWatchlist = (movie) => {
    dispatch({
      type: "ADD_MOVIE_TO_WATCHLIST",
      payload: movie,
    });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({
      type: "REMOVE_MOVIE_FROM_WATCHLIST",
      payload: id,
    });
  };

  const addMovieToWatched = (movie) => {
    dispatch({
      type: "ADD_MOVIE_TO_WATCHED",
      payload: movie,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
