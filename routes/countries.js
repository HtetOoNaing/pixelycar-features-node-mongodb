const express = require('express');
const { addManyCountries } = require('../controllers/countries');

const router = express.Router();

router.post('/addManyCountries', addManyCountries)

module.exports = router