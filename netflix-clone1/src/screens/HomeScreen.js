import React from "react";
import "./HomeScreen.css";
import NavBar from "../NavBar";
import Banner from "../Banner";
import Row from "../Row";
import request from "../Request";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <NavBar />

      {/* banner */}
      <Banner />

      {/* row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} isLargeRow />
      <Row
        title="Horror Movies"
        fetchUrl={request.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Romance  Movies"
        fetchUrl={request.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title="Comedy Movies"
        fetchUrl={request.fetchComedyMovies}
        isLargeRow
      />

      <Row
        title="Documentaries"
        fetchUrl={request.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
};

export default HomeScreen;
