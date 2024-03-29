const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
});

const Theatre = mongoose.model("theatre", theatreSchema); // table name - theatres

module.exports = Theatre;
