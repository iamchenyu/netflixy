import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player/youtube";
import "../styles/Feature.css";

const Feature = () => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState("");
  const [playing, setPlaying] = useState(false);
  const featureTrailer = useRef();

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

  useLayoutEffect(() => {
    // const iframe = document.getElementsByTagName("iframe");
    if (featureTrailer.current.player.player.player) {
      console.log(featureTrailer.current.player.player.player);
      console.log(featureTrailer.current.contentDocument);
      console.log("here");
      console.log(featureTrailer.current.player.player.player.h);
      console.log(
        featureTrailer.current.player.player.player.h.contentWindow.document
      );
      console.log(
        featureTrailer.current.player.player.player.h.attributes[4]
          .ownerDocument.children[0].children[1].children[1].children[1]
          .children[2].children[0]
      );
    } else {
      console.log("nope");
    }

    // console.log(iframe[0].contentDocument.getElementsByTagName("video"));

    // const video =
    //   iframe[0].contentWindow.document.getElementsByClassName("video-stream");
    // console.log("here");
    // console.log(video);
  }, [playing]);

  // useEffect(() => {
  //   const div = document.getElementsByClassName("Feature-trailer");
  //   if (div[0].childNodes[0]) {
  //     const iframe = document.getElementsByTagName("iframe");
  //     console.log("here");
  //     console.log(iframe);
  //   }

  //   const iframe = document.getElementsByTagName("iframe");
  //   console.log("here");
  //   console.log(iframe);
  //   // if (iframe[0]) {
  //   //   const video =
  //   //     iframe[0].contentWindow.document.getElementsByTagName("video");
  //   //   console.log(video);
  //   // }
  // }, [trailer]);

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const handleTrailerPlay = async (movie) => {
    // if (trailer) {
    //   setTrailer("");
    // } else {
    //   try {
    //     const { data } = await axios.get(
    //       `/.netlify/functions/getTrailer?id=${movie.id}`
    //     );
    //     setTrailer(data);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }
    setPlaying(true);
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

      <ReactPlayer
        className="Feature-trailer"
        url="https://www.youtube.com/watch?v=vS3_72Gb-bI"
        playing={playing}
        ref={featureTrailer}
      />
    </header>
  );
};

export default Feature;
