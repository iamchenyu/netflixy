const axios = require("axios");
require("dotenv").config();

const BASE_URL = "https://api.themoviedb.org/3";

exports.handler = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/genre/tv/list?api_key=${process.env.TMDB_API_KEY}`
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
