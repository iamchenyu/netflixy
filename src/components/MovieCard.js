import React, { useRef } from "react";
import ReactPlayer from "react-player";
import "../styles/MovieCard.css";

const MovieCard = () => {
  const videoContainerRef = useRef();

  const thumbnailRef = useRef();

  const handleOnMouseEnter = () => {
    videoContainerRef.current.classList.add("on-hover");
    thumbnailRef.current.style.opacity = 0;
  };

  const hanldeOnMouseLeave = () => {
    videoContainerRef.current.classList.remove("on-hover");
    thumbnailRef.current.style.opacity = 1;
  };

  return (
    <>
      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={hanldeOnMouseLeave}
        style={{ position: "relative" }}
      >
        <img
          src="/images/thumbnail.jpeg"
          className="MovieCard-video-thumbnail"
          ref={thumbnailRef}
        />
        <div className="MovieCard-container" ref={videoContainerRef}>
          {/* <ReactPlayer
            url="https://www.youtube.com/embed/czBAJkJ8GNQ?autoplay=1&mute=1&controls=0&enablejsapi=1&origin=http://localhost:8888"
            className="trailer-video"
            loading="lazy"
            // width="100%"
            // height="100%"
            playing
            muted
            config={{
              youtube: {
                playerVars: {
                  disablekb: 1,
                  iv_load_policy: 3,
                  //   origin: "http://localhost:8888",
                },
              },
            }}
          /> */}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=czBAJkJ8GNQ"
            className="trailer-video"
            // width="100%"
            // height="100%"
            playing
            muted
            config={{
              youtube: {
                playerVars: {
                  disablekb: 1,
                  iv_load_policy: 3,
                  origin: "http://localhost:8888",
                },
              },
            }}
          />
          <div className="MovieCard-text">
            <p>text</p>
            <p>Description</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
