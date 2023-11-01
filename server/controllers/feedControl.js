// import models
const Posts = require("../models/postModel")

// define controllers
const getPosts = async (req, res) => {
    try {
        const posts = await Posts.find({}).sort({ createdAt: -1 })
        res.status(200).json(posts)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const createPosts = async (req, res) => {
    try {
        const { creator, content } = req.body
        const post = await Posts.create({ creator, content, upvotes: [], comments: [] })
        res.status(200).json(post)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const sendUpvote = async (req, res) => {
    try{
        const { id } = req.query
        const { userName } = req.body
        const post = await Posts.findOneAndUpdate({_id: id}, {$push: { upvotes: { userName } }}, {returnOriginal: false})
        res.status(200).json(post)
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}

const postComment = async (req, res) => {
    try{
        const { id } = req.query
        const { userName, comment } = req.body
        const post = await Posts.findOneAndUpdate({_id: id}, {$push: { comments: { userName, comment } }}, {returnOriginal: false})
        res.status(200).json(post)
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getPosts, createPosts, sendUpvote, postComment }