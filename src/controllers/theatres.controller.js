const express = require("express");

const router = express.Router();

const Theatre = require("../models/theatres.model");

router.post("/", async (req, res) => {
    
    try {
        const theatre = await Theatre.create(req.body);    

        return res.status(200).send(theatre);

    } catch (e) {
        return res.status(401).json({message: e.message, status: "Failed"});
    }
})

router.get("/", async (req, res) => {
    
    try {
        const theatres = await Theatre.find().lean().exec();    

        return res.status(200).send(theatres);

    } catch (e) {
        return res.status(401).json({message: e.message, status: "Failed"});
    }
})

module.exports = router;

