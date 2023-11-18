const router = require("express").Router()

// import controller
const { loginUser, signupUser, createConnection } = require("../controllers/userControl")

// define routes
router.post("/login", loginUser)

router.post("/signup", signupUser)

router.post("/connect", createConnection)

module.exports = router