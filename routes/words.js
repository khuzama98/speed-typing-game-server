const express = require("express");
const router = express.Router();
const Words = require("../models/Words");


router.post("/insert", (req, res) => {
    const words = new Words(req.body);
    words.save()
        .then((result) => {
            res.send({ message: "word successfully inserted!", data: result, success: true })
        })
        .catch((e) => {
            res.send({ message: e.message, data: [], success: false })
        })
})

router.get("/get/:difficulty", (req, res) => {
    Words.aggregate([
        { $match: { difficulty: req.params.difficulty } }, // filter the results
        { $sample: { size: 5 } } // You want to get 5 docs
    ])
        .then((result) => {
            res.send({ message: "Successfully fetched!", data: result, success: true })
        })
        .catch((e) => {
            res.send({ message: e.message, data: [], success: false })
        })
})

module.exports = router;