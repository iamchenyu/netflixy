const axios = require("axios");
require("dotenv").config();

const BASE_URL = "https://api.themoviedb.org/3";

exports.handler = async (event) => {
  const { id } = event.queryStringParameters;
  try {
    let data;
    if (id) {
      data = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${id}`
      );
    } else {
      data = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${process.env.TMDB_API_KEY}`
      );
    }
    console.log("here");
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data.data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e.toString(),
    };
  }
};
