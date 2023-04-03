import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import "../styles/Feature.css";

const Feature = () => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getAMovie = async () => {
      const { data } = await axios.get(`/.netlify/functions/getFeaturedMovie`);
      const rand = Math.floor(Math.random() * data.results.length);
      setMovie(data.results[rand]);
    };
    getAMovie();
  }, []);

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  console.log(movie);

  return (
    <header
      className="Feature-container"
      style={{
        backgroundImage: movie
          ? `url(${IMG_BASE_URL}/${movie.backdrop_path})`
          : null,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="Feature-content">
        <h1 className="Feature-title">{movie ? movie.title : "Title"}</h1>

        <div className="Feature-buttons">
          <button className="Feature-button">Play</button>
          <button className="Feature-button">More Info</button>
        </div>

        <h1 className="Feature-description">
          {movie ? truncate(movie.overview, 150) : "Description"}
        </h1>
      </div>
      <div className="Feature-mask"></div>
    </header>
  );
};

export default Feature;
