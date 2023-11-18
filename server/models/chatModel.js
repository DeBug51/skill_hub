const mongoose = require("mongoose")
const Schema = mongoose.Schema

const memberSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users" },
    userName: { type: String, required: true }
})

const messageSchema = new Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users" },
    text: { type: String, required: true }
}, { timestamps: true })

const chatSchema = new Schema({
    members: [ memberSchema ],
    messages: [ messageSchema ]
})

module.exports = mongoose.model("Chats", chatSchema)