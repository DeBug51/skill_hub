// import model
const Users = require('../models/userModel')

const getFriends = async(req, res) => {
    const {userId} = req.params
    try{
        const userInfo = await Users.findById(userId).select('connections.userName connections.userId')
        res.status(200).json(userInfo)
    }catch(error){
        res.status(400).json({ error: error.message })
    }
}

const getUserInfo = async(req, res) => {
    const {userId} = req.params
    try{
        const userInfo = await Users.findById(userId).select('-_id userName userType email')
        res.status(200).json(userInfo)
    }catch(error){
        res.status(400).json({ error: error.message })
    }
}

const getPostInfo = async(req, res) => {
    const {creatorId} = req.params
    try{
        const post = await Users.findById(creatorId)
        res.status(200).json(post)
    }catch(error){
        res.status(400).json({ error: error.message })
    }
}


module.exports = {getFriends, getUserInfo, getPostInfo}