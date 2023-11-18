const jwt = require("jsonwebtoken")

// import model
const Users = require("../models/userModel")

// define functions
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET_KEY)
}

// define controllers
const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const { _id, userName } = await Users.login(email, password)
        const token = createToken(_id)
        res.status(200).json({ _id, userName, token})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const signupUser = async (req, res) => {
    const { userName, email, password } = req.body

    try {
        const user = await Users.signup(userName, email, password)
        res.status(200).json(user)
    } catch (error) {
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

module.exports = { loginUser, signupUser, createConnection }