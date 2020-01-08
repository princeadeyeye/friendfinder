const config = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 5000,
	jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
	mongoUri: process.env.MONGODB_URI ||
	process.env.MONGO_HOST ||
	'mongodb+srv://recipe:51Ok96m81a0oKSSi@cluster0-qscnl.mongodb.net/test?retryWrites=true&w=majority'
}


export default config