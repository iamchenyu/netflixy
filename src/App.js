import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tvs from "./pages/Tvs";

function App() {
  const [msg, setMsg] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get("/.netlify/functions/getGenres");
  //     // setMsg(data.message);
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tvs" element={<Tvs />} />
    </Routes>
  );
}

export default App;
