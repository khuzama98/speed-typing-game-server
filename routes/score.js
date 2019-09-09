const express = require("express");
const router = express.Router();
const Score = require("../models/Scores");

router.post("/insert", (req, res) => {
    const { username } = req.body;
    Score.find({ username })
        .then((doc) => {
            console.log('doc ==>', doc)
            if (doc.length) {
                Score.updateOne({ "username": req.body.username }, { $set: { "score": req.body.score } }, (err, result) => {
                    if (err) {
                        res.send({ message: err.message, data: [], success: false })
                    }
                    else {
                        res.send({ message: "score successfully updated!", data: result, success: true });
                    }
                })
            }
            else {
                const score = new Score(req.body)
                score.save()
                    .then((result) => {
                        res.send({ message: "score successfully inserted!", data: result, success: true });
                    })
                    .catch((e) => {
                        res.send({ message: e.message, data: [], success: false })
                    })
            }
        })
})

router.get("/getAll", (req, res) => {
    let easy, medium, hard;
    Score.find({ difficulty: "easy" }).sort({ score: 1 })
        .then((result) => {
            easy = result;
            Score.find({ difficulty: "medium" }).sort({ score: 1 })
                .then((result1) => {
                    medium = result1;
                    Score.find({ difficulty: "hard" }).sort({ score: 1 })
                        .then((result2) => {
                            hard = result2;
                            res.send({ message: "successfully fetched scores!", data: [easy, medium, hard], success: true })
                        })
                        .catch((e) => {
                            res.send({ message: e.message, data: [], success: false })
                        })
                })
                .catch((e) => {
                    res.send({ message: e.message, data: [], success: false })
                })
        })
        .catch((e) => {
            res.send({ message: e.message, data: [], success: false })
        })
})

module.exports = router;
