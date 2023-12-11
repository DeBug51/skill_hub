const router = require("express").Router()

// import controller
const { loginUser, signupUser } = require("../controllers/userControl")

// define routes
router.post("/login", loginUser)

router.post("/signup", signupUser)

module.exports = router