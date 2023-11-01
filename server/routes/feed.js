const router = require("express").Router()

// import controller
const { getPosts, createPosts, sendUpvote, postComment } = require("../controllers/feedControl")

// define routes
router.get("/posts", getPosts)

router.post("/posts", createPosts)

router.patch("/upvote", sendUpvote)

router.patch("/comment", postComment)

module.exports = router