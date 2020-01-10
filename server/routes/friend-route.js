const express = require('express')
const friendCtrl = require('../controllers/friend-controller')

const router = express.Router();

/*// get all users
router.get('/api/v1/friends', friendCtrl.listUsers)

// get a single user
router.get('/api/v1/friends/:userId', friendCtrl.getUser)

// update a user
router.patch('/api/v1/friends/userId', friendCtrl.updateUser)

// delete a user
router.patch('/api/v1/friends/:userid', friendCtrl.removeUser)

//show friend location
router.get('/api/v1/friends/:userId/location', friendCtrl.getlocation)

// save a friend 
router.post('/api/v1/friends', friendCtrl.savefriend)*/

module.exports = router