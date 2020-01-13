const User = require('../model/user-model')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const config = require('../../config/config')
const Helper = require('../../Helper')

async function createUser(req, res) {
	if (!req.body.email || !req.body.password) {
      return res.status(400)
                  .json({
                    "status": "error",
                    "error": "Some values are missing"
                    
                  });
    }
    if (!Helper.isValidEmail(req.body.email)) {
      return res.status(400)
                    .json({
                      "status": "error",
                        "error": "Please enter a valid email address"
                   });
    }

    const hashPassword = Helper.hashPassword(req.body.password);
	const user =  new User({
		username: req.body.username,
		fullname: req.body.fullname,
		email: req.body.email,
		hashed_password: hashPassword,
		phonenumber: req.body.phonenumber
	}) 
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
			"message": "Successfully signed up",
			"data": result
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
		if(!Helper.comparePassword(user.hashed_password, req.body.password)) {
			return res.status(401)
						.json({
							"status": "error",
							"error": "Email and password do not match"
						})
		}

		const token = jwt.sign({
			_id: user._id
		}, config.jwtSecret)

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


hasAuthorization = (req, res, next) => {
        const authorized = req.profile && req.auth && req.profile._id == req.auth._id
       if (!(authorized)) {
       return res.status('403').json({
         error: "User is not authorized"
        })
      }
      next()
  }

  const requireSignin = expressJwt({
	  	secret: config.jwtSecret,
	  	userProperty: 'auth'
  })


module.exports = { 
	createUser,
	signin,
	signout,
	requireSignin,
	hasAuthorization 
}