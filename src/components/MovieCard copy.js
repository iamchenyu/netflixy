import React, { useRef } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import "../styles/MovieCard.css";

const MovieCard = () => {
  const videoContainerRef = useRef();
  const videoTextRef = useRef();
  const videoRef = useRef();
  const thumbnailRef = useRef();

  const handleOnHoverStart = (e) => {
    videoContainerRef.current.classList.add("on-hover");
    videoTextRef.current.style.display = "block";
  };

  const handleOnHoverEnd = () => {
    videoContainerRef.current.classList.remove("on-hover");
    videoTextRef.current.style.display = "none";
  };

  const handleOnMouseEnter = (e) => {
    videoContainerRef.current.classList.add("on-hover-1");
    videoRef.current.classList.add("on-hover-2");
    videoRef.current.style.display = "block";
    // thumbnailRef.current.style.display = "none";
    e.target.style.display = "none";
    videoTextRef.current.style.display = "block";
  };

  const hanldeOnMouseLeave = (e) => {
    // videoContainerRef.current.classList.remove("on-hover");
    // videoRef.current.style.display = "none";
    // // thumbnailRef.current.style.display = "block";
    // e.target.style.display = "block";
    // videoTextRef.current.style.display = "none";
  };

  return (
    <>
      <div className="MovieCard-outside-container">
        <div className="MovieCard-container" ref={videoContainerRef}>
          {/* <HoverVideoPlayer
            videoSrc="https://i.imgur.com/hwUzoyu.mp4"
            crossOrigin="anonymous"
            sizingMode="overlay"
            className="MovieCard-video-player"
            pausedOverlay={
              <img
                src="/images/thumbnail.jpeg"
                alt="sunset video thumbnail"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            onHoverStart={handleOnHoverStart}
            onHoverEnd={handleOnHoverEnd}
          /> */}
          <img
            src="/images/thumbnail.jpeg"
            className="MovieCard-video-thumbnail"
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={hanldeOnMouseLeave}
            ref={thumbnailRef}
          />
          <iframe
            className="MovieCard-video-player"
            ref={videoRef}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/T0QS64-laHE?autoplay=1&mute=1&controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="MovieCard-text" ref={videoTextRef}>
            {" "}
            <p className="MovieCard-text-title">Title</p>
            <p>Description</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
