import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./components/Navigation";
import Feature from "./components/Feature";
import Section from "./components/Section";

function App() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const { data } = await axios.get("/.netlify/functions/getMovieGenres");
      setGenres(data.genres);
    };
    getGenres();
  }, []);

  return (
    <>
      <Navigation />
      <Feature />
      <Section
        genre={{ name: "Netflixy Originals", id: 213 }}
        isLarge
        functionName="getOriginal"
      />
      {genres.length === 0
        ? null
        : genres.map((genre) => (
            <Section key={genre.id} genre={genre} functionName="getMovies" />
          ))}
    </>
  );
}

export default App;
