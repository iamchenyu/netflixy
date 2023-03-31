import React from "react";
import ReactPlayer from "react-player";
import "../styles/Feature.css";

const Feature = () => {
  return (
    <>
      <div className="Feature-container">
        <div className="Feature-text">
          <p>Title</p>
          <p>Description</p>
        </div>
        <ReactPlayer
          url="https://www.youtube.com/embed/eUezG5vyj1I?autoplay=1&mute=1&controls=0&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A8888"
          className="Feature-video"
          playing
          muted
          config={{
            youtube: {
              playerVars: {
                disablekb: 1,
                iv_load_policy: 3,
              },
            },
          }}
        />

        {/* <video
          src="https://i.imgur.com/7ax74eb.mp4"
          autoplay=""
          muted={true}
          loop={true}
          preload="auto"
          playsInline
          className="Feature-video"
        ></video> */}
        <div className="Feature-mask"></div>

        {/* <iframe
          className="Feature-video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/6IAxn9ezBSA?autoplay=1&mute=1&controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="autoplay"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
      </div>
    </>
  );
};

export default Feature;
