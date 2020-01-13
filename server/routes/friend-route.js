const express = require('express')
const friendCtrl = require('../controllers/friend-controller')

const router = express.Router();

 // get all users
router.get('/api/v1/friends', friendCtrl.listFriends)

// get a single user
router.get('/api/v1/friends/:friendId', friendCtrl.getFriend)

// update a user
router.patch('/api/v1/friends/:friendId', friendCtrl.updateFriend)

// delete a user
router.delete('/api/v1/friends/:friendId', friendCtrl.removeFriend)

//show friend location
router.get('/api/v1/friends/:friendId/location', friendCtrl.saveLocation)

// save a friend 
router.post('/api/v1/friends', friendCtrl.saveFriend)

router.param('friendId', friendCtrl.friendById)

module.exports = router