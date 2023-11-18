// import models
const Posts = require("../models/postModel")

// define controllers
const getPosts = async (req, res) => {
    try {
        const posts = await Posts.find({}).select("creatorName content voteCount commentCount createdAt").sort({ createdAt: -1 })
        res.status(200).json(posts)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const createPost = async (req, res) => {
    try {
        const { creatorId, creatorName, content } = req.body
        const post = await Posts.create({ creatorId, creatorName, content, voteCount: 0, commentCount: 0, upvotes: [], comments: [] })
        res.status(200).json(post)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const addUpvote = async (req, res) => {
    try{
        const { postId } = req.params
        const { userId, userName } = req.body
        const match = await Posts.find({ _id: postId, "upvotes.userId": userId }).select("upvotes.userId")
        if (match.length == 0) {
            const post = await Posts.findByIdAndUpdate(postId, { $push: { upvotes: { userId, userName } }, $inc: { voteCount: 1 } }, {returnOriginal: false})
            res.status(200).json(post)
        } else {
            const post = await Posts.findByIdAndUpdate(postId, { $pull: { upvotes: { userId } }, $inc: { voteCount: -1 } }, {returnOriginal: false})
            res.status(200).json(post)
        }
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}

const getComments = async (req, res) => {
    try {
        const { postId } = req.params
        const posts = await Posts.findById(postId).select("-_id comments.userName comments.comment comments.createdAt")
        res.status(200).json(posts)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const addComment = async (req, res) => {
    try{
        const { postId, userId, userName, comment } = req.body
        const post = await Posts.findByIdAndUpdate(postId, { $push: { comments: { userId, userName, comment } }, $inc: { commentCount: 1 } }, {returnOriginal: false})
        .select("-_id comments.userName comments.comment comments.createdAt")
        res.status(200).json(post)
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getPosts, getComments, createPost, addUpvote, addComment }