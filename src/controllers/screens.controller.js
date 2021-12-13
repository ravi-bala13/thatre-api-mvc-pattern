const express = require("express");

const router = express.Router();

const Screen = require("../models/screens.model");

router.post("/", async (req, res) => {
    
    try {
        const screen = await Screen.create(req.body);    

        return res.status(200).send(screen);

    } catch (e) {
        return res.status(401).json({message: e.message, status: "Failed"});
    }
})

router.get("/", async (req, res) => {
    
    try {
        const screens = await Screen.find().populate("theatre").lean().exec();    

        return res.status(200).send(screens);

    } catch (e) {
        return res.status(401).json({message: e.message, status: "Failed"});
    }
})

module.exports = router;

