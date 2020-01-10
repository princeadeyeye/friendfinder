const User = require('../model/user-model')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const config = require('../../config/config')


async function createUser(req, res) {
	const user =  new User(req.body) 
	user.save((err, result) => {
		if(err) {
			return res.status(401)
						.json({
							"status": "error",
							"error": "unable to register user"
						})
		}
		res.status(201)
			.json({
			"status": "success",
			"message": "Successfully signed up"
		})
	})
}

async function signin(req, res) {
		User.findOne ({
			'email': req.body.email
		}, (err, user) => {
			if (err || !user)
				return res.status(401)
							.json({
								"status": "error",
								"error": "User not found"
							})
		
		if(!user.authenticate(req.body.password)) {
			return res.status(401)
						.json({
							"status": "error",
							"error": "Email and password do not match"
						})
		}

		const token = jwt.sign({
			_id: user._id
		}, config.jttSecret)

		res.cookie('t', token, {
			expire: new Date() + 99
		})

		return res.json({
			token,
			user: {_id: user._id, name: user.name, email: user.email}
		})
	})
}

const signout = (req, res) => {
	res.clearCookie("t")
		return res.status(200).json({
			"message": "signed out"
		})
}

module.exports = { 
	createUser,
	signin,
	signout 
}