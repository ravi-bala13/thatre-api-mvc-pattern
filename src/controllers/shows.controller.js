const express = require("express");
const router = express.Router();

const Show = require("../models/shows.model");

router.post("/", async (req, res) => {
  try {
    const show = await Show.create(req.body);

    return res.status(200).send(show);
  } catch (e) {
    return res.status(401).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const shows = await Show.find()
      .populate("movie")
      .populate("screen")
      .lean()
      .exec();

    return res.status(200).send(shows);
  } catch (e) {
    return res.status(401).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
