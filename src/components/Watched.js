import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
          <span className="count-pill">{watched.length} Movies</span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} type="watched" key={movie.id} />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">
            ☢ No Movies in your list, add some lads!
          </h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
