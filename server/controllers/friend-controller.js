const Friend = require('../model/friend-model')
const _ = require('lodash')


const listFriends = (req, res) => {
		Friend.find((err, users) => {
		if(err) {
			return res.status(400)
					.json({
						"status":"error",
						"error": "Unable to update list"
					})
		}
		res.status(200).json({
			"status": "success", 
			"data": users
		})
	})

}
const friendById = (req, res, next, id ) => {
	Friend.findById(id)
		.exec((err, friend) => {
			if(err || !friend) 
				return res.status(400).json({
					"error": "Friend not found"
				})
			req.profile = friend
			next()
		})
}
const getFriend = (req, res) => {
	res.status(200).json(req.profile)
}

const updateFriend = (req, res) => {
	let friend = req.profile
	friend = _.extended(friend, req.body)
	friend.updated = Date.now()

	friend.save((err) => {
		if(err) {
			return res.status(400).json('unable to update')
		}
		res.json(user)
	})


}

const removeFriend = (req, res) => {
	let friend = req.profile
	friend.remove((err, deleteUser) => {
		if(err) {
			return res.status(400).json("Unable to delete")
		}
		res.status(200).json(deleteUser)
	})
}

const saveLocation = (req, res) => {
	let location = req.body
	location.save((err, result) => {
		if (err) {
			res.status(401).json('cannot save location')
		}
		res.status(201).json({
			"status": "success",
			"message": "successfully saved location"
		})
	})

}

const saveFriend = (req, res) => {
	let newFriend = req.body
	newFriend.save((err, result) => {
		if (err) {
			res.status(401).json('cannot save friend')
		}
		res.status(201).json({
			"status": "success",
			"message": "successfully saved friend"
		})
	})

}
module.exports = { listFriends, getFriend, updateFriend, removeFriend, saveLocation, saveFriend, friendById }