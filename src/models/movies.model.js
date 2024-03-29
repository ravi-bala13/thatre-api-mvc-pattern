const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  actors: [{ type: String, required: true, unique: true }],
  languages: [{ type: String, required: true }],
  directors: [{ type: String, required: true }],
  poster_url: { type: String, required: true },
});

const Movie = mongoose.model("movie", movieSchema); // table name - movies

module.exports = Movie;
