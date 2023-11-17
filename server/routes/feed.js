const router = require("express").Router()

// import controller
const { getPosts, getComments, createPost, addUpvote, addComment } = require("../controllers/feedControl")

// define routes
router.get("/posts", getPosts)

router.post("/posts", createPost)

router.patch("/upvotes/:postId", addUpvote)

router.get("/comments/:postId", getComments)

router.patch("/comments/:postId", addComment)

module.exports = router