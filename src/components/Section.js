import React, { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import "../styles/Section.css";
import axios from "axios";

const Section = ({ genre, isLarge, functionName }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async (id) => {
      const { data } = await axios.get(
        `/.netlify/functions/${functionName}?id=${id}`
      );
      setMovies(data.results);
    };
    getMovies(genre.id);
  }, []);

  return (
    <>
      <div
        className="Section-lolomo-row"
        style={{ marginTop: isLarge ? "530px" : "0" }}
      >
        <div className="Section-lolomo-row-title">
          <h2>{genre.name}</h2>
        </div>
        <div className="Section-lolomo-row-poster">
          {movies.length === 0
            ? null
            : movies.map((movie) => (
                <ShowCard key={movie.id} movie={movie} isLarge={isLarge} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Section;
