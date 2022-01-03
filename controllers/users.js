exports.getAllUsers = (req, res) => {
	res.json({
		message: 'fetch all users'
	})
}

exports.addUser = (req, res) => {
	res.json({
		message: 'add new user'
	})
}

exports.getOneUser = (req, res) => {
	const id = req.params.userId
	res.json({
		message: 'fetch one user with user id',
	})
}

exports.updateUser = (req, res) => {
	const id = req.params.userId
	res.json({
		message: 'update user',
	})
}

exports.deleteUser = (req, res) => {
	const id = req.params.userId
	res.json({
		message: 'delete user',
	})
}