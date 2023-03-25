import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/.netlify/functions/getGenres");
      setMsg(data.message);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>{msg}</h1>
    </>
  );
}

export default App;
