const router = require("express").Router()

// import controller
const { getHeads, getChats, sendText } = require("../controllers/chatControl")

// define routes
router.get("/heads/:userId", getHeads)

router.get("/texts/:chatId", getChats)

router.patch("/texts", sendText)

module.exports = router