import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./Axios";
import request from "./Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const request2 = await axios.get(request.fetchNetflixOriginals);
        setMovie(
          request2.data.results[
            Math.floor(Math.random() * request2.data.results.length - 1)
          ]
        );
      } catch (error) {
        console.log("Error:", error);
      }
    }
    fetchData();
    setInterval(() => {
      fetchData();
    }, 3000);
  }, []);
  const truncate = (string, n) => {
    if (string?.length > n) {
      return string.substr(0, n) + "....";
    } else {
      return string;
    }
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.original_name || movie?.title || movie?.name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>
      <div className="banner__fadeButton" />
    </header>
  );
};

export default Banner;
