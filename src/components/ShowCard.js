import React, { useState } from "react";
import "../styles/ShowCard.css";
import ShowDetails from "./ShowDetails";

const ShowCard = ({ movie, isLarge }) => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [open, setOpen] = useState(false);

  const handlePosterClick = () => {
    setOpen(true);
  };

  const handlePosterClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={handlePosterClick}>
        <img
          src={`${IMG_BASE_URL}/${
            isLarge ? movie.poster_path : movie.backdrop_path
          }`}
          alt="poster"
          className={`ShowCard-poster ${isLarge ? "isLarge" : ""}`}
        />
      </div>
      {/* <ShowDetails
        open={open}
        handlePosterClose={handlePosterClose}
        movie={movie}
      /> */}
    </>
  );
};

export default ShowCard;
