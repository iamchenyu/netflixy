import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ShowDetails.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Feature from "./Feature";

const ShowDetails = ({ movie, open, handlePosterClose }) => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [movieDetails, setMovieDetails] = useState(null);

  const getMovieDetails = async (movieId) => {
    const { data } = await axios.get(
      `/.netlify/functions/getAMovie?movieId=${movieId}`
    );
    setMovieDetails(data);
  };

  //   if (open) {
  //     getMovieDetails(movie.id);
  //   }

  const handleTrailerBtnClick = async (movieId) => {
    const { data } = await axios.get(
      `/.netlify/functions/getAMovie?movieId=${movieId}`
    );

    setMovieDetails(data);
  };
  console.log(movie);
  console.log(movieDetails);

  return (
    <Modal open={open} onClose={handlePosterClose}>
      <Box className="ShowDetails-container">
        <IconButton
          onClick={handlePosterClose}
          className="ShowDetails-close-button"
        >
          <CloseIcon />
        </IconButton>
        <div
          className="ShowDetails-header"
          style={{
            backgroundImage: movie
              ? `url(${IMG_BASE_URL}/${movie.backdrop_path})`
              : null,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="ShowDetails-header-content">
            <h1 className="Feature-title">{movie ? movie.title : "Title"}</h1>

            <div className="Feature-buttons">
              <button className="Feature-button">Play</button>
              <button
                className="Feature-button"
                onClick={() => handleTrailerBtnClick(movie.id)}
              >
                Watch Trailer
              </button>
            </div>
          </div>
          {/* <div className="Feature-mask"></div> */}
        </div>
        <div className="ShowDetails-content">
          <p className="Feature-description">
            {movie ? movie.overview : "Description"}
          </p>
          <div></div>
        </div>
      </Box>
    </Modal>
  );
};

export default ShowDetails;
