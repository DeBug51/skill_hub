const mongoose = require("mongoose")
const Schema = mongoose.Schema

const messageSchema = new Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    message: { type: String }
}, { timestamps: true })

const chatSchema = new Schema({
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
    messsages: [ messageSchema ]
}, { timestamps: true })

module.exports = mongoose.model("Chats", chatSchema)