const express = require("express");

const router = express.Router();

const Movie = require("../models/movies.model");

router.post("/", async (req, res) => {
    
    try {
        const movie = await Movie.create(req.body);    

        return res.status(200).send(movie);

    } catch (e) {
        return res.status(401).json({message: e.message, status: "Failed"});
    }
})

router.get("/", async (req, res) => {
    
    try {
        const movies = await Movie.find().lean().exec();    

        return res.status(200).send(movies);

    } catch (e) {
        return res.status(401).json({message: e.message, status: "Failed"});
    }
})

module.exports = router;

