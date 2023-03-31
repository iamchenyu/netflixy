import React from "react";
import MovieCard from "./MovieCard";
import "../styles/Section.css";

const Section = ({ genre }) => {
  return (
    <>
      <div className="Section-lolomo-row">
        <div className="Section-lolomo-row-title">
          <h2>{genre.name}</h2>
        </div>
        <div className="Section-lolomo-row-movies">
          <MovieCard />
          {/* <MovieCard />
          <MovieCard /> */}
        </div>
      </div>
    </>
  );
};

export default Section;
