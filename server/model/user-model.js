const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		trim: true,
		require: 'Username is required'
	},
	fullname: {
		type: String,
		trim: true,
		require: 'Name is required'
	},
	email: {
		type: String,
		trim: true,
		unique: 'Email already exist', 
		require: 'Email is required'
	},
	phonenumber: {
		type: Number,
		trim: true,
		require: 'Phone Number is required'
	},
	
	created: {
		type: Date,
		default: Date.now(),
	},

	hashed_password: {
		type: String,
		require: 'Password is required'
	},

	friends: [{type: mongoose.Schema.ObjectId, ref: 'User'}],

	location: String,

	salt: String,

	updated: Date,
})


module.exports = mongoose.model('User', UserSchema)