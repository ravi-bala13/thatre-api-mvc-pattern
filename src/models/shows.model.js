const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
  timing: { type: String, required: true },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movie",
    required: true,
  },
  total_seats: { type: Number, required: true },
  screen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "screen",
    required: true,
  },
});

const Show = mongoose.model("show", showSchema); // table name - shows

module.exports = Show;
