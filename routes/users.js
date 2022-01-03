const express = require('express');
const { getAllUsers, addUser, getOneUser, updateUser, deleteUser } = require('../controllers/users');

const router = express.Router();

router.get('/', getAllUsers)

router.post('/', addUser)

router.get('/:userId', getOneUser)

router.put('/:userId', updateUser)

router.delete('/:userId', deleteUser)

module.exports = router