const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  show: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "show",
    required: true,
  },
});

const Seat = mongoose.model("seat", seatSchema); // table name - seats

module.exports = Seat;
