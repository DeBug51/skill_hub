const router = require("express").Router()

// import controller
const { getHeads, getChats, sendText } = require("../controllers/chatControl")

// define routes
router.get("/heads", getHeads)

router.get("/chats", getChats)

router.post("/chats", sendText)

module.exports = router