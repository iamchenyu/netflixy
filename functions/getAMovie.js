const axios = require("axios");
require("dotenv").config();

const BASE_URL = "https://api.themoviedb.org/3";

exports.handler = async (event, context) => {
  try {
    const movieId = event.queryStringParameters;

    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId.movieId}?api_key=${process.env.TMDB_API_KEY}`
    );

    return {
      statusCode: 200,

      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e.toString(),
    };
  }
};
