const router = require("express").Router()

// import controller
const { getUsers, createConnection } = require("../controllers/connectControl")

// define routes
router.get("/users/:userId", getUsers)

router.post("/add", createConnection)

module.exports = router