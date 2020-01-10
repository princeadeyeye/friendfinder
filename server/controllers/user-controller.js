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
		.exec((err,result) => {
			if(err || !user) 
				return res.status(400).json({
					"error": "User not found"
				})
			req.profile = User
			next()
		})
}

const getUser = (req, res) => {
	req.profile.hashed_password = undefined
	req.profile.salt = undefined
	return res.status(200).json(req.profile)
}
module.exports = {
	listUsers,
	userById,
	getUser,
}