import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import "../styles/Feature.css";

const Feature = () => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    const getAMovie = async () => {
      const { data } = await axios.get(`/.netlify/functions/getMovies`);
      const rand = Math.floor(Math.random() * data.results.length);
      setMovie(data.results[rand]);
    };
    getAMovie();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTrailer("");
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const handleTrailerPlay = async (movie) => {
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
          <button
            className="Feature-button"
            onClick={() => handleTrailerPlay(movie)}
          >
            Play
          </button>
          <button className="Feature-button">More Info</button>
        </div>

        <h1 className="Feature-description">
          {movie ? truncate(movie.overview, 150) : "Description"}
        </h1>
      </div>

      <div className="Feature-mask"></div>
      {trailer && (
        <YouTube
          videoId={trailer}
          className="Feature-trailer"
          opts={{ height: "500", width: "100%", playerVars: { autoplay: 1 } }}
        />
      )}
    </header>
  );
};

export default Feature;
