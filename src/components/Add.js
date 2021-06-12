import { useState } from "react";
import ResultCard from "./ResultCard";

const Add = () => {
  //* Implementing Search Query
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  //* IMPLEMENTING SEARCH QUERY
  /**
   * @param  {} e
   * @param  {} =>{e.preventDefault(
   * @param  {} ;setQuery(e.target.value
   * @param  {} ;fetch(`https
   */
  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=87f8919a00a8373494ab40b5ff6f64ca&language=en-US&page=1&include_adult=true&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              value={query}
              type="text"
              placeholder="Search for a movies"
              //* we tell the component when we change the value
              onChange={onChange}
            />
          </div>
          {/*
           * @param  {} <ulclassName="results">{results.map((movie
           * @param  {} =>(<likey={movie.id}><ResultCardmovie={movie}/></li>
           * @param  {} }</ul>
           */}
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
