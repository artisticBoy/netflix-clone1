import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./Axios";

const Row = ({ title, fetchUrl, isLargeRow = true }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies)
  const baseUrl = "http://image.tmdb.org/t/p/w500/";
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
