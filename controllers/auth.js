const CryptoJS = require('crypto-js')
const User = require("../models/User")


exports.register = async (req, res) => {
	const { username, email, password } = req.body
	const newUser = new User({
		username,
		email,
		password: CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET).toString()
	})

	try {
		const savedUser = await newUser.save()
		res.status(201).json({ user: savedUser })
	} catch (error) {
		res.status(500).json({ error })
	}

}