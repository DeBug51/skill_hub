const express = require("express")
const mongoose = require("mongoose")

require("dotenv").config()

//import routes
const chatRoute = require("./routes/chat")
const feedRoute = require("./routes/feed")

// create express app
const app = express()

//middleware
app.use(express.json())

//routes
app.use("/api/chat", chatRoute)
app.use("/api/feed", feedRoute)

// test
app.get("/", (req, res) => {
    res.json({})
})

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listen to port
    app.listen(process.env.SERVER_PORT, () => {
        console.log("Listening to Port:", process.env.SERVER_PORT)
    })
})
.catch((error) => {
    console.log(error)
})