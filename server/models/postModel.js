const mongoose = require("mongoose")
const Schema = mongoose.Schema

const upvoteSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref:"Users" },
    userName: { type: String, required: true }
})

const commentSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref:"Users" },
    userName: { type: String, required: true },
    comment: { type: String, required: true }
}, { timestamps: true })

const postSchema = new Schema({
    creatorId: { type: mongoose.Schema.Types.ObjectId, required: true, ref:"Users" },
    creatorName: { type: String, required: true },
    content: { type: String, required: true },
    voteCount: { type: Number, required: true },
    commentCount: { type: Number, required: true },
    upvotes: [ upvoteSchema ],
    comments: [ commentSchema ]
}, { timestamps: true })

module.exports = mongoose.model("Posts", postSchema)