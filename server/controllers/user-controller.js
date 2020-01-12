const User = require('../model/user-model')



const listUsers = (req, res) => {
	User.find((err, users) => {
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

const userById = (req, res, next, id ) => {
	User.findById(id)
		.exec((err, user) => {
			if(err || !user) 
				return res.status(400).json({
					"error": "User not found"
				})
			req.profile = user
			next()
		})
}

const getUser = (req, res) => {
	req.profile.hashed_password = undefined
	req.profile.salt = undefined
	return res.status(200).json(req.profile)
}

const updateUser = (req, res) => {
	let user = req.profile
	user = _.extended(user, req.body)
	user.updated = Date.now()
	user.save((err) => {
		if(err) {
			return res.status(400).json('unable to update')
		}
		req.profile.hashed_password = undefined
		req.profile.salt = undefined
		res.json(user)
	})
}

const removeUser = (req, res) => {
	let user = req.profile
	user.remove((err, deleteUser) => {
		if(err) {
			return res.status(400).json("Unable to delete")
		}
		res.status(200).json(deleteUser)
	})
}

module.exports = {
	listUsers,
	userById,
	getUser,
	updateUser,
	removeUser
}