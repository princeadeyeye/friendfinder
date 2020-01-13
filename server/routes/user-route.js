const express = require('express')
const userCtrl = require('../controllers/user-controller')

const router = express.Router();

// get all users
router.get('/api/v1/users', userCtrl.listUsers)

// param route
router.param('userId', userCtrl.userById)


// get a single user
router.get('/api/v1/users/:userId', userCtrl.getUser)

// update a user
router.patch('/api/v1/users/:userId', userCtrl.updateUser)

// delete a user
router.patch('/api/v1/users/:userid',userCtrl.removeUser)

module.exports = router