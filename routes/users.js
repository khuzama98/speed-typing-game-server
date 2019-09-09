const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

router.post("/signup", (req, res) => {
    const user = new Users(req.body);
    user.save()
        .then(() => res.send({ message: "User inserted successfully!", success: true }))
        .catch(e => res.send({ message: e.message, success: false }))
})


router.post("/signin", (req, res) => {
    console.log('body ==>', req.body)
    const username = req.body.username;
    const password = req.body.password;
    Users.find({ username, password })
        .then((result) => {
            console.log(result);
            result.length ?
                res.send({ message: "User successfully signedIn!", success: true })
                :
                res.send({ message: "Invalid username and password or user doesn't exist!", success: false })
        })
        .catch(e => res.send({ message: e.message, success: false }))
})


module.exports = router;