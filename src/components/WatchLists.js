import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const WatchLists = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" key={movie.id} />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">☢ No Movies in your watchlist</h2>
        )}
      </div>
    </div>
  );
};

export default WatchLists;
