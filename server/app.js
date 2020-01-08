const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const compress = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const config = require('../config/config')


// USER ROUTES
const userRoute = require('./routes/user-route')
const authRoute = require('./routes/auth-route')

// express
const app = express();

//connect to database

mongoose.connect(config.mongoUri)
	.then(() => {
		console.log('connected to mongodb atlas successfully')
	})
	.catch((error)=> {
		console.log('unnable to connect to mongodb atlas')
	})

// MIDDLEWARE

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// ROUTES
app.use('/', userRoute)
app.use('/', authRoute)







module.exports = app