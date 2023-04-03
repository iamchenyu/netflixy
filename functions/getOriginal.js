const axios = require("axios");
require("dotenv").config();

const BASE_URL = "https://api.themoviedb.org/3";

exports.handler = async (event, context) => {
  const id = event.queryStringParameters;
  try {
    const { data } = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_networks=${id.id}`
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
