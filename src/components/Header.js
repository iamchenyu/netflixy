import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-logo">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="netflixy app logo"
            className="Header-logo-image"
          />
        </a>
      </div>
      <div className="Header-menu">
        <Link to="/movies">Movies</Link>
        <Link to="/tvs">Tvs</Link>
      </div>
    </div>
  );
};

export default Header;
