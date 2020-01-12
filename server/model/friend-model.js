const mongoose = require('mongoose')

const FriendSchema = new mongoose.Schema({
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

	friends: [{type: mongoose.Schema.ObjectId, ref: 'Friend'}],

	location: String,

	updated: Date
})



module.exports = mongoose.model('Friend', FriendSchema)