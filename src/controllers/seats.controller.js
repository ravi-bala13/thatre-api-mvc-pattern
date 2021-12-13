const express = require("express");

const router = express.Router();

const Seat = require("../models/seats.model");

router.post("/", async (req, res) => {
    
    try {
        const seat = await Seat.create(req.body);    

        return res.status(200).send(seat);

    } catch (e) {
        return res.status(401).json({message: e.message, status: "Failed"});
    }
})

router.get("/", async (req, res) => {
    
    try {
        const seats = await Seat.find().populate("show").lean().exec();    

        return res.status(200).send(seats);

    } catch (e) {
        return res.status(401).json({message: e.message, status: "Failed"});
    }
})

module.exports = router;

