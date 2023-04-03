import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsShown(true);
      } else {
        setIsShown(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className="Navigation" style={{ background: isShown ? "black" : "" }}>
      <Link to="/" style={{ display: "contents" }}>
        <img
          src="/images/logo.png"
          alt="netflixy app logo"
          className="Navigation-logo"
        />
      </Link>
      <div className="Navigation-menu">
        <Link to="/movies">Movies</Link>
        <Link to="/tvs">Tvs</Link>
      </div>
      <img
        src="/images/avatar.jpeg"
        alt="netflixy app avatar pic"
        className="Navigation-avatar"
      />
    </div>
  );
};

export default Navigation;
