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
    const { userName, userType, email, password } = req.body

    try {
        const user = await Users.signup(userName, userType, email, password)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { loginUser, signupUser}