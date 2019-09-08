const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

router.use("/users", require("./users"));

module.exports = router;