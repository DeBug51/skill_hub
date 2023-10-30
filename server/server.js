const express = require("express")
require("dotenv").config()

// create express app
const app = express()

//routes


// listen to port
app.listen(process.env.SERVERPORT, () => {
    console.log("Listening to Port:", process.env.SERVERPORT)
})