const express = require("express");
const app = express();
const mongoose = require("./config/db");
const db = mongoose.connection;
const cors = require("cors");

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const port = 5001;

app.listen(port,()=>{
    console.log(`listening on ${port}`)
})

db.once('open', function () {
    console.log("Database Connected Successfully");
});

db.on('error', console.error.bind(console, 'connection error:'));


app.use('/',require("./routes/index"))