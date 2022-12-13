const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  theatre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "theatre",
    required: true,
  },
});

const Screen = mongoose.model("screen", screenSchema);

module.exports = Screen;
