const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

router.use("/users", require("./users"));

router.use("/score", require("./score"));

router.use("/words", require("./words"));

module.exports = router;