const mongoose = require("mongoose");

const WordsSchema = new mongoose.Schema({
    word: {
        type: String,
        unique: true,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    }
})

const Words = mongoose.model("Words", WordsSchema);

module.exports = Words;