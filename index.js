const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const countryRoute = require('./routes/countries')

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected')).catch(err => console.log(err))

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/countries', countryRoute)

app.use((req, res, next) => {
	const error = new Error('Not found')
	error.status = 404;
	next(error)
})

app.use((error, req, res, next) => {
	res.status(error.status || 500)
	res.json({
		error: {
			message: error.message
		}
	})
})

app.listen(PORT, () => console.log('Server run at port ', PORT))