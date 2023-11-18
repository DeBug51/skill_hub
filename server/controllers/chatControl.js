// import models
const Users = require("../models/userModel")
const Chats = require("../models/chatModel")

// define controllers
const getHeads = async (req, res) => {
    try {
        const { userId } = req.params
        const user = await Users.findById(userId).select("-_id connections.userId connections.userName connections.chatId")
        res.status(200).json(user)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const getChats = async (req, res) => {
    try {
        const { chatId } = req.params
        const chat = await Chats.findById(chatId).select("messages.sender messages.text messages.createdAt")
        res.status(200).json(chat)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const sendText = async (req, res) => {
    try{
        const { chatId, sender, text } = req.body
        const chat = await Chats.findByIdAndUpdate(chatId, { $push: { messages: { sender, text } } }, {returnOriginal: false})
        .select("-_id messages.sender messages.text messages.createdAt")
        res.status(200).json(chat)
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getHeads, getChats, sendText }