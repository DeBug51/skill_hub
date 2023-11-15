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
        const user = await Users.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({ _id: user._id, token})
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

module.exports = { loginUser, signupUser }