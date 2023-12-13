const express = require("express")
const mongoose = require("mongoose")

require("dotenv").config()

//import routes
const chatRoute = require("./routes/chat")
const feedRoute = require("./routes/feed")
const userRoute = require("./routes/user")
const profileRoute = require('./routes/profile')
const taskRoute = require('./routes/task')
const connectRoute = require("./routes/connect")

// create express app
const app = express()

//middleware
app.use(express.json())

//routes
app.use("/api/chat", chatRoute)
app.use("/api/feed", feedRoute)
app.use("/api/user", userRoute)
app.use("/api/profile", profileRoute)
app.use("/api/task",taskRoute)

app.use("/api/connect", connectRoute)

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