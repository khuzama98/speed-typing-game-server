const mongoose = require("mongoose");

const UserScore = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    }
});

const Score = mongoose.model('Score', UserScore);

module.exports = Score;