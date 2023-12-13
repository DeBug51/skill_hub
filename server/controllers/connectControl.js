// import model
const Users = require("../models/userModel")
const Chats = require("../models/chatModel")

// define controllers
const getUsers = async (req, res) => {
    try {
        const { userId } = req.params
        const users = await Users.find({$and: [{"connections.userId": {$ne: userId}}, {_id: {$ne: userId}}]}).select("userName")
        res.status(200).json(users)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const createConnection = async (req, res) => {
    try {
        const { user1Id, user1Name, user2Id, user2Name } = req.body
        
        const match = await Users.find({ _id: user1Id, "connections.userId": user2Id }).select("connections.userId")
        if (match.length == 0) {
            const chat = await Chats.create({ members: [{ userId: user1Id, userName: user1Name }, { userId: user2Id, userName: user2Name }], messages: []})

            const user1 = await Users.findByIdAndUpdate(user1Id, { $push: { connections: { userId: user2Id, userName: user2Name, chatId: chat._id } } }, {returnOriginal: false})
            await Users.findByIdAndUpdate(user2Id, { $push: { connections: { userId: user1Id, userName: user1Name, chatId: chat._id } } }, {returnOriginal: false})
            
            res.status(200).json(user1)
        } else {
            res.status(400).json({ error: "Connection already exists" })
        }        
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getUsers, createConnection }