const router = require("express").Router()

const {getFriends, getUserInfo, getPostInfo} = require('../controllers/profileControl')

router.get('/friend/:userId', getFriends)
router.get('/user/:userId', getUserInfo)
router.get('/post/:creatorId', getPostInfo)


module.exports = router
