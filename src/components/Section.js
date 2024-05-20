import React, { useEffect, useState } from "react";
import "../styles/Section.css";
import axios from "axios";
import ReactPlayer from "react-player/youtube";

const Section = ({ genre, isLarge, functionName }) => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    const getMovies = async (id) => {
      const { data } = await axios.get(
        `/.netlify/functions/${functionName}?id=${id}`
      );
      setMovies(data.results);
    };
    getMovies(genre.id);
  }, []);

  const handlePosterClick = async (movie) => {
    if (trailer) {
      setTrailer("");
    } else {
      try {
        const { data } = await axios.get(
          `/.netlify/functions/getTrailer?id=${movie.id}`
        );
        setTrailer(data);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <>
      <div
        className="Section-row"
        style={{ marginTop: isLarge ? "530px" : "0" }}
      >
        <div className="Section-row-title">
          <h2>{genre.name}</h2>
        </div>
        <div className="Section-row-poster">
          {movies.length > 0 &&
            movies.map((movie) => (
              <img
                key={movie.id}
                src={`${IMG_BASE_URL}/${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={`poster for movie ${movie.title}`}
                className={`Section-row-poster-img ${isLarge ? "isLarge" : ""}`}
                onClick={() => handlePosterClick(movie)}
              />
            ))}
        </div>
        {trailer && <ReactPlayer url={trailer} playing={true} muted={true} />}
      </div>
    </>
  );
};

export default Section;
